'use strict';

let route = require('express').Router();
let mongoose = require('mongoose');
let skills = require('./../../config/skills.json');

require('./../../models/skills.js');

route.get('/about',(req,res)=> {
  let Model = mongoose.model('skills');
  console.log('admin_about_get');
  Model.find().then(items=> {
    let form = items.reduce((prev, cur)=> {
      prev[cur.section] = cur.items.reduce((prev, cur)=> {
        prev[cur.name] = cur.value;
        return prev;
      }, {});

      return prev;
    }, {});

    Object.keys(skills).forEach(sk_key=>{
      Object.keys(skills[sk_key].items).forEach(key=>{
        var value=0;
        if(form[skills[sk_key].id] && form[skills[sk_key].id][skills[sk_key].items[key]]){
          value=form[skills[sk_key].id][skills[sk_key].items[key]]
        }
        skills[sk_key].items[key]={
          name:skills[sk_key].items[key],
          value:value
        };
      })
    });

    res.renderer('admin', {skills: skills});
  })
});

route.post('/about',(req,res)=> {
  let Model = mongoose.model('skills');
  let models = [];
  console.log('admin_about_save');
  let skills_list= {};
  Object.keys(req.body).forEach(key=>{
    var val=req.body[key];
    key=key.split('_');
    if(!skills_list[key[1]]){
      skills_list[key[1]]={};
    }
    skills_list[key[1]][key[2]]=val;
  });
  Object.keys(skills_list).forEach(key=>{
    var items=[];
    Object.keys(skills_list[key]).forEach(sk_key=>{
      items.push({
        name:sk_key,
        value:skills_list[key][sk_key]
      })
    });
    var toSave={
      section:key,
      items:items
    };
    models.push(new Model(toSave));
  });

  if(models.filter(m=>m.validateSync()).length){
    return res.json({error:'Не удалось сохранить данные!'})
  }

  Model.remove({}).then(()=>
    Model.insertMany(models).then(()=>
      res.json({message:'Соханено!'})
    )
  )
});

module.exports = route;