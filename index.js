module.exports = windsock

function windsock() {}

windsock.prototype.generate = function(speed, bearing){
  bearing = Math.round(bearing/45)*45
  var rads = bearing/360*2*Math.PI
  return function(x,y,z) {
    if (
      (x === 0 && z === 0 && y > 0 && y <= 10) ||
      (
        y === 10
        && x/z === Math.round(Math.cos(rads) / Math.sin(rads))
        && Math.sqrt(Math.pow(x,2) + Math.pow(z,2)) <= speed
        && (rads > Math.PI ? z < 0 : z >= 0)
      )
    ) return 1

    return 0
  }
}

windsock.prototype.blueprint = function(pos, speed, bearing) {
  bearing = Math.round(bearing/45)*45
  var rads = bearing/360*2*Math.PI
  var sockHeight = pos[1] + 10
  var windsockCoordinates = []

  for (var i = 0; i <= 10; i++) { windsockCoordinates.push([pos[0], i + pos[1], pos[2]]) } //build pole relative to position

  for (var j = -1 * speed; j < speed; j++ ) {
    for (var k = -1 * speed; k < speed; k++) {
      if (
        j/k === Math.round(Math.cos(rads) / Math.sin(rads) )
        && Math.sqrt(Math.pow(j,2) + Math.pow(k,2)) <= speed
        && (rads > Math.PI ? k < 0 : k >= 0)
      )
        windsockCoordinates.push([j + pos[0], sockHeight, k + pos[2]])
    }
  }
  return windsockCoordinates
}
