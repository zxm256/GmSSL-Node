var ffi = require('ffi');
var demo = ffi.Library('libdemo',{'add':['int',['int','int']]});
console.log(new Date());
console.log(demo.add(123456789,987654321));
console.log(new Date());
