exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var revStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }

    return revStr;
  }
};
