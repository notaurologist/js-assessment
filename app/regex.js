exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    // Capture letter, then test for one or more of that letter
    return (/([a-z])\1/i).test(str);
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var matches = (/(\d{3})/).exec(str);
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    // 1-3 numbers w/ 0+ groups of ",123" before optional decimal
    // e.g., "$.12" fails this test. Would require "$0.12".
    return (/^\$(?:\d{1,3})(?:,\d{3})*(?:\.\d{2})?$/).test(str);
  }
};
