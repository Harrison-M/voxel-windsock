var createGame = require('voxel-engine')
var player = require('voxel-player')
var texturePath = require('painterly-textures')(__dirname)
var Windsock = require('./')
var windsock = new Windsock()
var game = createGame({
  texturePath: texturePath,
  generate: function(x, y, z) {
    if(y === 0) return 1
    return windsock.generate(10.2,180)(x,y,z)
  }
})
var container = document.body
game.appendTo(container)

var avatar = player(game)()
avatar.possess()
avatar.yaw.position.set(0,5,5)

var newsock = windsock.blueprint([20,0,20], 7.02, 128)
newsock.forEach(function(pos) {
    game.createBlock(pos,3)
})
