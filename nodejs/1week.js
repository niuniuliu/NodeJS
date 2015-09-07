process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});

// var path = require('path');

// var cache = {};

// function store(key, value) {
// 	cache[path.normalize(key)] = value;
// }

// store('/foo/bar/.///////////1', 1);
// store('foo//baz//../////bar/../1/2/3', 2);
// // console.log(cache); // => { "foo/bar": 2 }

// console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
// );
// path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
