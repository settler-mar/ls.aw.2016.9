'use strict';

module.exports=(req,res,next)=>{
  console.log('test admin');
  if(!req.session.isAdmin){
    console.log('admin');
    res.redirect('/')
  }else{
    next();
  }
};