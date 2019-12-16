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


app.use(cors());
//app.options('*', cors(corsOpt));

mongo.connect(function(error,db){
  if(error) throw error;
   console.log("files url will come here");
   app.listen(port,function(){
        require('./routes/report')(app,db);
    })
})

