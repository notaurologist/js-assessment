exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

    var recurseData = function (subdir) {
      for (var i = 0, len = subdir.files.length; i < len; i++) {
        var file = subdir.files[i];
        if (typeof file === 'object') {
          recurseData(file);
        } else {
          files.push(file);
        }
      }

      return files;
    };

    return recurseData(data);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
