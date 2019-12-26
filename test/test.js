"use strict";
var assert = require('assert');

// describe('Array', () => {

//   beforeEach(function () {
//       this.ary = [1, 2, 3];
//   });

//   describe('#indexOf()', function () {
//     it('should return index when the value is present', function () {
//         var zero = 0, two = 2;
//         assert(this.ary.indexOf(zero) === this.ary.indexOf(zero) );
//     });
//   });
// });


// describe('various types', function(){
//     function Person(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     beforeEach(function(){
//         this.types = [
//             'string', 98.6, true, false, null, undefined,
//             ['nested', 'array'],
//             {object: true},
//             NaN, Infinity,
//             /^not/,
//             new Person('satc', 3)
//         ];
//     });
//     it('string diff demo', function(){
//         var index = this.types.length -1,
//             bob = new Person('bob', 5);
//         assert(this.types[index].name === bob.name);
//     });
// });


describe('#indexOf()', function () {
  it('测试', function () {
      const x = "小明";
      const y = "小花";
      assert( x.length === y.length );
  });
});