exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // Keep track of the dirs we care about
    var dirs = [];

    var recurseDir = function (subdir) {
      // Add the current subdir to the ones we care about
      dirs.push(subdir.dir);

      var files = _.reduce(subdir.files, function (list, item) {
        if (typeof item === 'string') {
          // If we've hit a string AND
          // we're not looking for a subdir OR
          // we're in a subdir we care about,
          // include in the our returned list.
          if (!dirName || dirs.indexOf(dirName) > -1) {
            list.push(item);
          }

          return list;
        }

        // This is a dir, recurse it
        return list.concat(recurseDir(item));
      }, []);

      // We no longer care about this subdir
      dirs.pop();

      return files;
    };

    return recurseDir(data);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
