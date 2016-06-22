function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return x + y;
}

try {
  var answer = add('a', 'b');
  console.log('The answer is', answer);
} catch (e) {
  console.log('There was an error:', e.message);
}

// Don't muffle errors
