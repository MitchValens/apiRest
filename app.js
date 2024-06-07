'use strict';

var e = require('express');
var b= require('body-parser');
var a= e();

a.use(b.urlencoded({ extended: false }));
a.use(b.json());

a.get("/pruebas",function(req,res){
    res.status(200).send({mesage:"La respuesta fue un exito "});
});

module.exports = a;
