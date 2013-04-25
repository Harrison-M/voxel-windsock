module.exports = function(speed, bearing){
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
