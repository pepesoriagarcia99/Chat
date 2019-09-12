import { Router } from 'express'
import user from './user'
import auth from './auth'
import mensaje from './mensaje'
import grupo from './grupo'
import conversacion from './conversacion'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */
router.use('/users', user)
router.use('/auth', auth)
router.use('/mensajes', mensaje)
router.use('/grupos', grupo)
router.use('/conversaciones', conversacion)




export default router

// var io = require("socket.io")();
// io.on('connection', function (socket) {
//     console.log("------------------chat");

//     socket.on('chat message', function (msg) {
//         io.emit('chat message', msg);
//     });
// });

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

