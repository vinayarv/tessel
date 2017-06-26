// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This ambient module example console.logs
ambient light and sound levels and whenever a
specified light or sound level trigger is met.
*********************************************/

var tessel = require('tessel');
var ambientlib = require('ambient-attx4');
var cameraModule= require('../camera/camera');
var camServer = cameraModule.cameraServer;
var camera = cameraModule.camera;

var ambient = ambientlib.use(tessel.port['B']);

ambient.on('ready', function () {
 // Get points of light and sound data.
  setInterval( function () {
    ambient.getSoundLevel(function(err, sounddata){
      if(err) throw err;
      if(sounddata.toFixed(4) > 0.4){
        console.log(sounddata.toFixed(4));
        camera.capture().pipe(response);
      }
    })
  }, 100); // The readings will happen every .5 seconds
});

ambient.on('error', function (err) {
  console.log(err);
});
