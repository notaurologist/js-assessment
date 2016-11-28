exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // If we want the 2nd bit, we only want to shift one off the end
    // Then we check if the bit is 1; return 1 if yes, else 0.
    return 1 & (num >> bit - 1);
  },

  base10: function(str) {
    // SPECIFICALLY converting binary number string to base10
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var str = num.toString(2);
    // Expecting an entire byte, so left-pad as necessary
    while (str.length < 8) {
      str = '0' + str;
    }

    return str;
  },

  multiply: function(a, b) {

  }
};
