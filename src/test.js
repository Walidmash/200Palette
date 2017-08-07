var test = require('tape');
var backendScript = require('./backendScript.js');

test('Testing Suggestion Function is working', function(t) {
var sugName='re';
  var actual = backendScript.suggest(sugName);
  var expected = ['red', 'rebeccapurple'];
  t.deepEqual(actual, expected, 'One should equal one');
  t.end();
});

test('Testing searchResult Function is working', function(t) {
var color='red';
  var actual = backendScript.searchResult(color);
  var expected = [255,0,0];
  t.deepEqual(actual, expected, 'One should equal one');
  t.end();
});
