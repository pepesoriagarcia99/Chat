import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { conectar } from './controller'
import { schema } from './model'
export Conversacion, { schema } from './model'

// import { io } from 'socket.io'
var io = require("socket.io")();

const router = new Router()
const { integrantes, mensajes, fecha } = schema.tree

// io.on('conectar', (socket) => {
//   console.log("pa tu casa");
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

export default router

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// var io = require("socket.io")();

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        console.log("-----------> "+msg)
        io.emit('chat message', msg);
    });
});
