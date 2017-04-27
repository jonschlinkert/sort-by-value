var sortBy = require('./');

var arr = [
  {title: 'Main Title'},
  {title: 'Foo'},
  {title: 'Baz'},
  {title: 'Bar'},
  {title: 'Qux'},
  {title: 'Faz'},
  {title: 'Fez'}
];

function custom(arr, options) {
  var initial = [];
  if (options.values[0] === '.') {
    initial.push(arr.shift());
  }
  var rest = sortBy(arr, options);
  return initial.concat(rest);
}

var res = custom(arr, {
  prop: 'title',
  values: ['.', 'Faz', 'Qux', 'Bar'],
  normalize: function(val) {
    return val;
  }
});

console.log(res);
