"use strict";

var config = require("./config");

const socket = new WebSocket('ws://'+ config.host +':' + config.port);
socket.addEventListener("message", function (event) {
    if (event.data === "RELOAD") {
        window.location.reload();
    }
});