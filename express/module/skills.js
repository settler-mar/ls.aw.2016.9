'use strict';

let mongoose = require('mongoose'),
    Schema=mongoose.Schema,
    TechSchema = new Schema({
      section:{
        type: String
      },
      items:{
        type:[{
          name:{
            type:String
          },
          value:{
            type:Number,
            default:0
          }
        }

        ]
      }
    });