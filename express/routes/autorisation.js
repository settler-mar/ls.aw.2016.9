'use strict';

let route = require('express').Router();
let mongoose = require('mongoose');
let crypto = require('crypto');


route.post('/',(req,res)=>{
  console.log('autorisaton');

  if(req.body.recapcha!=1 || !req.body.capcha){
    return res.send(JSON.stringify({error:'Ведешь себя как робот!!!'}));
  }
  if(!req.body.login || !req.body.password){
    return res.send(JSON.stringify({error:'Укажите логин и пароль!'}));
  }

  let Model=mongoose.model('user'),
    password=crypto.createHash('md5')
      .update(req.body.password)
      .digest('hex');

  Model.findOne({
    login:req.body.login,
    password:password
  }).then(item=>{

    if(!item){
      res.send(JSON.stringify({error:'Логин и/или пароль введены неверно!'}));
    }else{
      req.session.isAdmin=true;
      res.send(JSON.stringify({href:'/admin',message:'Успешная авторизация'}));
    }
  })
});

module.exports=route;