'use strict';

let route = require('express').Router();
let nodemailer = require('nodemailer');
let config = require('./../config/server.config.json');

route.post('/',(req,res)=> {
  console.log('send mail');
  if(!req.body.name||!req.body.email||!req.body.text){
    return res.send(JSON.stringify({error:'Заполните форму'}));
  }

  let transporter = nodemailer.createTransport(config.mail.smtp),
    mailOptions={
      from: `"${req.body.name}"<${req.body.email}>`,
      to:config.mail.smtp.auth.user,
      subject: config.mail.subject,
      text:req.body.text.trim().slice(0,500)
    };
  transporter.sendMail(mailOptions,function (err,info) {
    if(err){
      return res.send(JSON.stringify({error:err.message}));
    }

    res.json({});
  })
});

module.exports=route;
