'use strict';

require('mocha');
var assert = require('assert');
var sortBy = require('..');

describe('sort-by-value', function() {
  it('should export a function', function() {
    assert.equal(typeof sortBy, 'function');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      sortBy();
    });

    assert.throws(function() {
      sortBy('foo');
    });

    assert.throws(function() {
      sortBy({});
    });

    assert.throws(function() {
      sortBy([], {});
    });

    assert.throws(function() {
      sortBy([], {prop: 'foo'});
    });
  });

  it('should sort an array by property values', function() {
    var arr = [
      {title: 'Foo'},
      {title: 'Baz'},
      {title: 'Bar'},
      {title: 'Qux'},
      {title: 'Faz'},
      {title: 'Fez'}
    ];

    var res = sortBy(arr, {
      prop: 'title',
      values: ['Faz', 'Qux', 'Bar'],
      normalize: function(val) {
        return val;
      }
    });

    assert.deepEqual(res, [
      { title: 'Faz' },
      { title: 'Qux' },
      { title: 'Bar' },
      { title: 'Foo' },
      { title: 'Baz' },
      { title: 'Fez' }
    ]);
  });

  it('should work with an array with one element', function() {
    var arr = [{title: 'Foo'}];

    var res = sortBy(arr, {
      prop: 'title',
      values: ['Faz', 'Qux', 'Bar'],
      normalize: function(val) {
        return val;
      }
    });

    assert.deepEqual(res, [
      { title: 'Foo' }
    ]);
  });

  it('should return an array with no elements', function() {
    var arr = [];

    var res = sortBy(arr, {
      prop: 'title',
      values: ['Faz', 'Qux', 'Bar'],
      normalize: function(val) {
        return val;
      }
    });

    assert.deepEqual(res, []);
  });
});
