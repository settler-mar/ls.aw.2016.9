'use strict';

let fs = require('fs');
let path = require('path');
let express = require('express');
let pug = require('pug');
let config = require('./express/config/server.config.json');
let mongoodb=require('./express/models/mongoodb');
let app =express();
let bodyParser = require('body-parser');
let session=require('express-session');
let MongoStore=require('connect-mongo')(session);

    require('./express/models/user');

app.use(session({
  secret:'loftschool',
  saveUninitialized:false,
  resave:false,
  store: new MongoStore({mongooseConnection:mongoodb.connection})
}));

app.set('view engine', 'pug');
app.set('views',path.resolve(`./express/view/pages/`));

app.use(express.static(path.resolve(config.http.publicRoot)));
app.use(bodyParser.json());
/**/
//===Маршруты====
app.use('/autorisation',require('./express/routes/autorisation'));
app.use('/admin',require('./express/routes/admin/middleware'));
app.use('/admin',require('./express/routes/admin/about'));
app.use('/admin',require('./express/routes/admin/blog'));
app.use('/admin',require('./express/routes/admin/works'));
app.use('/admin',require('./express/routes/admin/index'));
app.use('/',require('./express/routes/frontend'));
app.use('/mail',require('./express/routes/sendmail'));
//===============

app.use((req,res,next)=>res.status(404).send('404! Page not found'));
app.use((err,req,res,next)=>{
  res.status(500);
  res.render('error',{error:err.message});
  console.error(err.message,err.stack)
});

app.listen(config.http.port, function () {
  let uploadDir = path.resolve(config.http.publicRoot,'upload');

  if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
  }
  console.log(`Server is up on ${config.http.host}:${config.http.port}!`);
});