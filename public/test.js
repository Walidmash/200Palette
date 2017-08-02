var test = require('tape');
var index = require('./index.js');

test('Testing rgbToHsl Function is working', function(t) {
var r=255;
var g=0;
var b=0;
  var actual = index.rgbToHsl(r, g, b);
  var expected =  [ 0, 100, 50 ];
  t.deepEqual(actual, expected, 'One should equal one');
  t.end();
});
