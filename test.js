var createGame = require('voxel-engine')
var player = require('voxel-player')
var texturePath = require('painterly-textures')(__dirname)
var config = require('./config.js')
var windsock = require('./')(10,86)

var game = createGame({
  texturePath: texturePath,
  generate: function(x, y, z) {
    if(y === 0) return 1
    return windsock(x,y,z)
  }
})
var container = document.body
game.appendTo(container)

//Here's what you're wanting
var avatar = player(game)()
avatar.possess()
avatar.yaw.position.set(0,5,5)
