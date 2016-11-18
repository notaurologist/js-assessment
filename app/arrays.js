exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function (sum, curr) {
      return sum + curr;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.reduce(function (newArray, curr) {
      if (curr !== item) {
        newArray.push(curr);
      }

      return newArray;
    }, []);
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) >= 0) {
      // splice sig: (index, number of items to delete, new items)
      arr.splice(arr.indexOf(item), 1);
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    // concat creates a new array
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce(function (sum, curr) {
      if (curr === item) {
        return sum + 1;
      }

      return sum;
    }, 0);
  },

  duplicates: function(arr) {
    return arr.sort().reduce(function (dupes, curr, idx) {
      // If the current item is the same as the last
      // and it's not already in the dupes array, add it.
      if (curr === arr[idx - 1] && dupes.indexOf(curr) === -1) {
        dupes.push(curr);
      }

      return dupes;
    }, []);
  },

  square: function(arr) {
    return arr.map(function (item) {
      return item * item;
    });
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce(function (indices, curr, idx) {
      if (curr === target) {
        indices.push(idx);
      }

      return indices;
    }, []);
  }
};
