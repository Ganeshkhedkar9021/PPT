var express = require('express');
var mongo = require('./config/mongo.js');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
var jwt = require('jsonwebtoken');
//var http = require('http');
var port=3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


const corsOpt = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*', // this work well to configure origin url in the server
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // to works well with web app, OPTIONS is required
  allowedHeaders: ['Content-Type','Origin','X-Requested-With','Accept'] // allow json and token in the headers
};

app.use(function(req, res, next) {
  var url = (req.protocol + '://' + req.get('host') + req.originalUrl).split('/');
  console.log("URL",url[url.length-2])
  //var parts = 'http://mywebsite/folder/file'.split('/');
var lastSegment = url.pop() || url.pop();  // handle potential trailing slash

console.log(lastSegment);
  

   
  let token = req.headers['authorization']; // Express headers are auto converted to lowercase
  console.log("This is request: ",token);

   // console.log("This is token",token);
  if(typeof(token) != "undefined"){
     // console.log("this is main if loop 2");

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    if (token) {
      console.log("This is token", token);
      jwt.verify(token, "supersecret", (err, decoded) => {
        if (err) {
          return res.json({
            error: true,
            message: 'Token is not valid'
          });
        } else {
         // console.log("Token have  success");
          next();
          //req.decoded = decoded;
         
        }
      });
    } 
    else {
      //next();
      console.log("Auth token is not supplied");
      return res.json({
        
        error: true,
        message: 'Auth token is not supplied'
      });
    }
  }
  else{
   
   if(lastSegment =='login'|| lastSegment=='createold_report' || url[url.length-2]=='download_report_pdf' || url[url.length-1]=='download_report_pdf'){
   // console.log("this is main if loop");
    next();
   }
   else{

     if(req.method=='OPTIONS'){
      next();
     }
  //   next();
    // next();
    // return res.json({
    //   error: true,
    //   message: 'Token is not valid: '+lastSegment
    // });

    // console.log("This is else loop", url)
    // next();
   }

  }
});

app.use(cors());
//app.options('*', cors(corsOpt));

mongo.connect(function(error,db){
  if(error) throw error;
   console.log("files url will come here");
   app.listen(port,function(){
        require('./routes/report')(app,db);
    })
})

