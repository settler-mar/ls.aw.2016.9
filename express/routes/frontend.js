'use strict';

let route = require('express').Router();
let mongoose = require('mongoose');
let skills = require('./../config/skills.json');
let config = require('./../config/server.config.json');

route.get('/',(req,res)=> {
  console.log('index');
  res.render('index')
});

route.get('/blog.html',(req,res)=>{
  console.log('blog');
  let Model=mongoose.model('blog');

  Model.find().then(items=>{
    console.log(items);
    res.render('blog',{items:items})
  })
});

route.get('/works.html',(req,res)=>{
  console.log('works');
  let Model=mongoose.model('works');

  Model.find().then(items=>{
    for(var key=0;key<items.length;key++){
      items[key]['skills_list']=items[key]['skills'].split(',');
      items[key]['picture']='/'+config.http.uploadDir+'/'+ items[key]['pictures'][0];
    }
    res.render('works',{items:items})
  })
});

route.get('/about.html',(req,res)=>{
  console.log('about');
  let Model = mongoose.model('skills');

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
        if(
          form[skills[sk_key].id] &&
          form[skills[sk_key].id][key]
        ){
          value=form[skills[sk_key].id][key];
        }
        var name=skills[sk_key].items[key];
        if(name['name'])name=name['name'];
        var item={
          name:name,
          value:value,
          key:key
        };
        skills[sk_key].items[key]=item;
      })
    });
    res.render('about',{skills:skills})
  });
});

module.exports = route;