'use strict';

let fs = require('fs');
let path = require('path');
let route = require('express').Router();
let mongoose = require('mongoose');
let multiparty = require('multiparty');
let config = require('./../../config/server.config.json');

require('./../../models/works');

route.post('/works',(req,res)=> {
  let form= new multiparty.Form();
  console.log('admin_work');
  form.parse(req,function(err,fields,files){
    if(err){
      return res.send(JSON.stringify({error:err.message||err}))
    }

    let Model=mongoose.model('works'),
      item = new Model({
        name:fields.name[0],
        skills:fields.skill[0],
        link:fields.link[0]
      });

    item.save().then( work =>{
      let picture=files.image.map((file,key)=>{
        let newFilePath=`${work._id}_${key}${path.extname(file.path)}`;
        fs.writeFileSync(config.http.publicRoot+'/'+config.http.uploadDir+'/'+newFilePath,fs.readFileSync(file.path));

        return newFilePath;
      });
      console.log(picture);

      return Model.update({_id:work._id},{$pushAll:{pictures:picture}});
    },e=>{
      throw new Error(Object.key(e.errors).map(key=>e.errors[key].message).join(', '));
    }).then(
      i=> res.send(JSON.stringify({message:'Запись успешно добавленна!'})),
      e=> res.send(JSON.stringify({error:e.message}))
    )
  })
});


module.exports = route;