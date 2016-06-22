try {
  setTimeout(function() {
    var c = a + b;
  }, 100);
} catch (e) {
  console.log('There was an error:', e.message);
}
