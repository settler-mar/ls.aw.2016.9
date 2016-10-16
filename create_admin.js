'use strict';
let mongoose=require('./express/models/mongoodb'),
  readline=require('readline'),
  crypto=require('crypto'),
  rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
  }),
  login='',
  password='';

rl.question('Логин: ',answer=>{
  login=answer;

  rl.question('Пароль: ', answer=>{
    password=answer;
    rl.close();
  })
});

rl.on('close',()=>{
  require('./express/models/user');
  password=crypto.createHash('md5').update(password).digest("hex");

  let User =mongoose.model('user'),
    adminUser=new User({login:login, password:password});

  User.findOne({login:login}).then(u=>{
    if(u){
      throw new Error('Такой пользователь уже существует!');
    }

    return adminUser.save();
  }).then(
    u=>console.log('User \x1b[36m'+login+'\x1b[0m add'),
    e=>console.log(e.message)
  ).then(()=>process.exit(0))
});