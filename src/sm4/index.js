var ffi = require("ffi");
var ref = require("ref");
var Struct = require("ref-struct");
const ArrayType  = require("ref-array");
const SM4_KEY = Struct({
  rk: ArrayType(ref.types.uint32, 32),
});
var gmssl = ffi.Library("libgmssl", {
  sm4_set_encrypt_key: [
    "void",
    ["pointer", "pointer"],
  ],
  sm4_set_decrypt_key: [
    "void",
    ["pointer", "pointer"],
  ],
  sm4_encrypt: [
    "void",
    ["pointer","pointer", "pointer"],
  ],
});
const SM4 = {
  set_encrypt_key: function (params) {
    const key = new SM4_KEY()    
    var raw_key = new Uint8Array(params);
    gmssl.sm4_set_encrypt_key(key.ref(),raw_key)
    return key
  },
  encrypt: function (key,data) {
    var input = new Uint8Array(data);
    var output = new Uint8Array(16);
    gmssl.sm4_encrypt(key.ref(),input,output)
    return output;
  },
  set_decrypt_key: function (params) {
    const key = new SM4_KEY()    
    var raw_key = new Uint8Array(params);
    gmssl.sm4_set_decrypt_key(key.ref(),raw_key)
    return key
  },
  decrypt: function (key,data) {
    var input = new Uint8Array(data);
    var output = new Uint8Array(16);
    gmssl.sm4_encrypt(key.ref(),input,output)
    return output;
  },
};

module.exports = SM4;
