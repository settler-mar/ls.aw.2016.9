'use strict';

let route = require('express').Router();
let mongoose = require('mongoose');

require('./../../models/blog.js');

route.post('/blog',(req,res)=> {
  console.log('admin_blog');
  let Model = mongoose.model('blog'),
      item = new Model({
        title:req.body.name,
        date:req.body.data,
        body:req.body.text
      });

  item.save().then(
    i=> res.send(JSON.stringify({message:'Запись добавленна!'})),
    e=>{
      let error = Object.key(e.errors)
        .map(key=>e.errors[key].message)
        .join(', ');

      res.send(JSON.stringify({error:error}));
    }
  )
});


module.exports = route;