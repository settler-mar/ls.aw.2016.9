'use strict';

let route = require('express').Router();
let mongoose = require('mongoose');
route.get('/',(req,res)=> {
  let skills = require('./../../config/skills.json');
  console.log('admin_index');
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

    res.render('../admin/index',{skills: skills});
  });

});
module.exports = route;