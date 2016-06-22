function distance(point1, point2) {
  var sdX = squareOfDiff(point1.x, point2.y);
  var sdY = squareOfDiff(point1.y, point2.y);
  return Math.sqrt(sdX + sdY);
}

function squareOfDiff(a, b) {
  var diff = a - b;
  return square(dif);
}

function square(num) {
  return num * num;
}

try {
  var point1 = { x: 0, y: 0 };
  var point2 = { x: 1, y: 1 };
  var dist = distance(point1, point2);
  console.log(dist);
} catch (e) {
  console.log('There was an error: ' + e.message);
}
