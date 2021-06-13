
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var admin = require("firebase-admin");

var fs = require('fs'); 
const Pool = require("pg").Pool;

var serviceAccount = require("./serviceAccountKey.json");


const requestController = require("./controller/insertdata.controller");

const passport = require('passport');
const BearerStratergy = require('passport-azure-ad').BearerStrategy;
const azureConfig  = require('./azure/config');
const authenticatedUserTokens = [];
const serverPort = process.env.PORT || azureConfig.serverPort;
const cors = require("cors");
const first = require('ee-first');



var app = express().use(bodyParser.json());

app.use(bodyParser.json({ limit: '50mb' }));// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));// to support URL-encoded bodies
app.use(passport.initialize());
app.use(passport.session());


const pool = new Pool({
    host: "testdb.postgres.database.azure.com",
    user: "rupaliDB",
    database: "test",
    password: "test",
    port: 5432
});






app.get('/test', function (req, res) {
    var statuscode, statusdescription, errormsg;
    statuscode = 200;
    statusdescription = "Success";
    errormsg = "Test";
    res.send(JSON.stringify({ 'StatusCode': statuscode, 'StatusDescription': statusdescription, "ErrorMessage": "" }));
});

app.post('/testpost', function (req, res) {
    var statuscode, statusdescription, errormsg;
    var field = req['test'];
    statuscode = 200;
    statusdescription = field;
    errormsg = "Test";
    res.send(JSON.stringify({ 'StatusCode': statuscode, 'StatusDescription': statusdescription, "ErrorMessage": "" }));
});

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:3000"
};



httpServer.listen(process.env.port || process.env.PORT || 3000, function () {
    var port = process.env.port || process.env.PORT || 3000;
    console.log("Server is running on " + port + " port");
});

