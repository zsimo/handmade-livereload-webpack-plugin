"use strict";

var io = require("socket.io-client");
var config = require("./config");

var socket = io(config.host);

socket.on('connect', function () {
    console.log('connect to handmade live reload socket server (id: ' + socket.id + ")");
});
socket.on("RELOAD", function () {
    window.location.reload();
});

