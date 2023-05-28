function uint8tohex(uint8Array) {
  return Array.prototype.map
    .call(uint8Array, (x) => ("00" + x.toString(16)).slice(-2))
    .join("");
}
module.exports = {
  uint8tohex,
};
