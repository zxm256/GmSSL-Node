var ffi = require('ffi');
var gmssl = ffi.Library("libgmssl", {
  sm3_digest: ["void", ["pointer", "int", "pointer"]],
});
const SM3 = {
  /**
   * SM3散列函数
   * @param String, Int, Array
   * @returns String
   */
  hash: function (params) {
    var output = new Uint8Array(32);
    var str = Buffer.from(params, 'utf8');
    gmssl.sm3_digest(str, str.length, output);
    return output;
  },
};

module.exports = SM3;
