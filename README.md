voxel-windsock
==============

Creates a "windsock" based on a bearing and an intensity.  Meant for use with forecast.io.

Currently locked to 45-degree angles.

Usage: `require('voxel-windsock')(speed,bearing)`
Returns: `function(x,y,z)` that adheres to voxel-engine generator API

Test build: `browserify test.js -o game.js`
