'use strict'

const User = require('./dbInjector.js').dbModels.users; 
const exec = require('child_process').execFile;
const jwt = require('jsonwebtoken');
const session = require('./dbInjector.js').dbModels.session; 
// const body = req.body;

exports.create = function(req,res) {
  var body = req.body;
  User.findOne({ email : body.email }).exec(function(err,data) {
    if(err) {
      console.log({
        status : false,
        resCode : 400,
        isError :true, 
        message : 'Internal error while finding user',
        error : err
      });

      res.send({
        status : false,
        resCode : 400,
        isError :true, 
        message : 'Internal error while finding user'
        // error : err
      });
    } else if(!data) {
       console.log("Data");
       console.log(data);

       //Inserting user.
       var newUser = {
         email : body.email,
         password : body.password,
         createdAt : new Date().getDate()
       }
       var newEntry = new User(newUser);
       newEntry.save(function(err,data) {
        if(err) { 
          console.log({
            status : true,
            resCode : 200,
            isError : false,
            message : "Invalid user entry",
            error : err
          });
          res.send({
            status : true,
            resCode : 200,
            isError : false,
            message : "Invalid user entry",
            // error : err
          });
        } else if(data) {
          res.send({
            status : true,
            resCode : 200,
            isError : false,
            message : "Data inserted successfully",
            data : data
          });
         }
       });
    }
  })
}

exports.login = function(req,res) {
  let body = req.body;
  var secretKey = 'zx';
  // console.log('Body');
  // console.log(body);
  var query =  {
    email : body.email,
    password : body.password
  };
  console.log("Query");
  console.log(query);

  //Searching for user if exist letting login.
  User.findOne(query).exec(function(err,data) {
    if(err) {
        console.log({
          status : false,
          resCode : 500,
          isError : true,
          message : "Internal error while finding user"
        });
    } else if(data) {
        console.log({
          status : true, 
          resCode : 200, 
          isError : false,
          message : 'User successfully logged In',
          data : data
        });
        res.send({
          status : true, 
          resCode : 200, 
          isError : false,
          message : 'User successfully logged In',
          data : data,
          token : jwt.sign({ email : data.email, password : data.password },secretKey)
        });
    }
  })
}
