

const express = require("express")
const app = express();
const basicAuth = require("express-basic-auth");
const request = require("request");
const uuid = require('uuid/v4')
const session = require('express-session')
const queryString = require('query-string');
const cors = require("cors");
const API_KEY = '677e2552899ef7d1a2d2c0f4df141a17c6a28';
const DATABASE_URL = 'https://harmony-b573.restdb.io/rest';
const PORT = process.env.PORT || 8080;

const cache = {};

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(function (req, res, next) { // Website you wish to allow to connect 
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin); // Request methods you wish to allow 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Request headers you wish to allow 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization'); // Set to true if you need the website to include cookies in the requests sent // to the API (e.g. in case you use sessions) 
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Pass to next layer of middleware 
  next(); 
});
app.use(session({
  genid: (req) => {
    return uuid()
  },
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: null,
    secure: false,
  }
}))

app.get("/services", function(req, res){
  var option = {
    method: "GET",
    url: DATABASE_URL + "/harmony-service",
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY } 
  }
  request(option, function(error, response, body){
    res.send(body)
  })
})

app.get("/services-types", function(req, res){
  var option = {
    method: "GET",
    url: DATABASE_URL + "/harmony-types",
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY } 
  }
  request(option, function(error, response, body){
    res.send(body)
  })
})

app.get("/services-areas", function(req, res){
  var option = {
    method: "GET",
    url: DATABASE_URL + "/harmony-areas",
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY } 
  }
  request(option, function(error, response, body){
    res.send(body)
  })
})

app.post("/user/services", function(req, res){
  var options = {
    method: 'GET',
    url: DATABASE_URL + '/users-to-services?q=' + JSON.stringify(
      {
        user: {_id: req.body.userId}
      }),
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY },
  }
  console.log(options.url)
  request(options, function(error, response, body){
    res.send(body)
  })
})

app.post("/services/guest-registry",  function(req, res){
  var options = {
    method: 'POST',
    url: DATABASE_URL + '/guests-to-services',
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY,
      'content-type': 'application/json' },
    body: {
      date: req.body.date,
      servicesId: req.body.serviceId,
      name: req.body.name,
      phone: req.body.phone,
    },
    json: true,
  }
  console.log(req.body);
  request(options, function(error, response, body){
    res.statusCode = 200;
    res.send();
  })
});

app.post("/services/user-registry",  function(req, res){
  var arr = [];
  arr.push(req.body.serviceId);
  var options = {
    method: 'POST',
    url: DATABASE_URL + '/users-to-services',
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY,
      'content-type': 'application/json' },
    body: {
      date: req.body.date,
      services: arr,
      user: req.body.userId,
    },
    json: true,
  }
  console.log(req.body);
  request(options, function(error, response, body){
    res.statusCode = 200;
    res.send();
  })
});

// Для проверки

app.get("/guests-to-service", function(req, res){
  var option = {
    method: "GET",
    url: DATABASE_URL + "/guests-to-services",
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY } 
  }
  request(option, function(error, response, body){
    res.send(body)
  })
})

app.post("/users",  function(req, res){
  var options = {
    method: 'POST',
    url: DATABASE_URL + '/harmony-users',
    headers: 
    { 'cache-control': 'no-cache',
      'x-apikey': API_KEY,
      'content-type': 'application/json' },
    body: {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
    },
    json: true,
  }
  console.log(req.body);
  request(options, function(error, response, body){
    res.statusCode = 200;
    res.send();
  })
});

app.post("/userdata", function(req, res){
  console.log(req.body);
  var options = { 
    method: 'GET',
    url: DATABASE_URL + '/harmony-users/' + req.body.userId,
    headers: 
     { 'cache-control': 'no-cache',
       'x-apikey': API_KEY } 
  };
  
  request(options, function (error, response, body) {
    let data = JSON.parse(body);
    console.log(data);
    if(data._id === undefined) {
      res.statusCode = 401;
      res.send();
    }else{
      let user = {};
      user.name = data.name;
      user.email = data.email;
      user.phone = data.phone;
      user.dateOfBirth = data.dateOfBirth;
      res.statusCode = 200;
      res.send(JSON.stringify(user));
    }
  }); 
})

app.put("/userdata", function(req, res){
  let dataBody = {};
  if (req.body.name != undefined) dataBody.name = req.body.name;
  if (req.body.phone != undefined) dataBody.phone = req.body.phone;
  if (req.body.dateOfBirth != undefined) dataBody.dateOfBirth = req.body.dateOfBirth;
  console.log(req.body);
  var options = { 
    method: 'PUT',
    url: DATABASE_URL + '/harmony-users/' + req.body.userId,
    headers: 
     { 'cache-control': 'no-cache',
       'x-apikey': API_KEY },
    body: {
      name: dataBody.name,
      phone: dataBody.phone,
      dateOfBirth: dataBody.dateOfBirth,
    },
    json: true,
  };
  
  request(options, function (error, response, body) {
    console.log(error);
    console.log(response);
    if(error != null) {
      res.statusCode = 401;
      res.send();
    }else{
      res.statusCode = 200;
      res.send();
    }
  }); 
})

app.post("/login",  function(req, res){
  console.log(cache)
  let params = {};

  params.email = req.body.email;
  params.password = req.body.password;

  var options = { 
    method: 'GET',
    url: DATABASE_URL + '/harmony-users?q=' + JSON.stringify(params),
    headers: 
     { 'cache-control': 'no-cache',
       'x-apikey': API_KEY } 
  };
  console.log(options.url);
  
  request(options, function (error, response, body) {
    let data = JSON.parse(body);
    console.log(data);
    if(data[0] === undefined) {
      res.statusCode = 401;
      res.send();
    }else{
      cache[req.sessionID] = data[0]._id;
      res.statusCode = 200;
      res.send(JSON.stringify({
        userId: data[0]._id
      }));
      console.log(cache)
    }
  }); 
});

app.get("/logout", function(req, res){
  cache[req.sessionID] = undefined;
  res.statusCode = 200;
  res.send();
});

app.listen(PORT);


