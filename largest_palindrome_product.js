/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  // going to work on function to check for more than just 2 and 3 digits. So find middle number (k) of product i * j and check if k + i = k - i.

  n = Math.pow(10, digits);
  for (i = 10; i < n; i++) {
    for (j = 10; j < n; j++) {
      var ijProduct = i * j;
      var digit1 = Math.floor((ijProduct / 1) % 10);
      var digit2 = Math.floor((ijProduct / 10) % 10);
      var digit3 = Math.floor((ijProduct / 100) % 10);
      var digit4 = Math.floor((ijProduct / 1000) % 10);
      var digit5 = Math.floor((ijProduct / 10000) % 10);
      var digit6 = Math.floor((ijProduct / 100000) % 10);
      if (digits === 2 && digit1 === digit4 && digit2 === digit3) {
        if (ijProduct > palindromeNumber) {
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = ijProduct;
        }
      } else if (
        digits === 3 &&
        digit1 === digit6 &&
        digit2 === digit5 &&
        digit3 === digit4
      ) {
        if (ijProduct > palindromeNumber) {
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = ijProduct;
        }
      }
    }
  }
  palindromeNumber;

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
