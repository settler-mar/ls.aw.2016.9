'use strict';

let mongoose = require('mongoose'),
  Schema=mongoose.Schema,
  WorkSchema = new Schema({
    name:{
      type:String,
      required:[true,'Укажите имя проекта']
    },
    skills:{
      type:String,
      required:[true,'Укажите используемые технологии']
    },
    link:{
      type:String,
      required:[true,'Укажите ссылку на проект']
    },
    pictures:{
      type:[String]
    }
  });

mongoose.model('works',WorkSchema);