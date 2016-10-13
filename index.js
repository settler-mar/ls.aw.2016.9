'use strict';

let fs = require('fs');
let path = require('path');
let express = require('express');
let pug = require('pug');
let config = require('./express/config/server.config.json');
let mongoodb=require('./express/module/mongoodb');
let app =express();

app.set('view engine','pug');
app.set('view',path.resolve(`./${config.http.publicRoot}/makups/pages`));

app.use(express.static(path.resolve(config.http.publicRoot)));


//===Маршруты====
app.get('/',(req,res)=>{
  res.setHeader('Content-type','text/html;charset=utf8');
  res.end('Работает');
});
//===============

app.use((req,res,next)=>res.status(404).send('404! Page not found'));
app.use((err,req,res,next)=>{
  res.status(500);
  res.renderer('error',{error:err.message});
  console.error(err.message,err.stack)
});

app.listen(config.http.port, function () {
  let uploadDir = path.resolve(config.http.publicRoot,'upload');

  if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
  }
  console.log(`Server is up on ${config.http.host}:${config.http.port}!`);
});