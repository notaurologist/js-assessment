exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return _.reduce(arr, function (sum, i) {
      return sum + i;
    }, 0);
  },

  remove: function(arr, item) {
    return _.reduce(arr, function (newArray, i) {
      if (i !== item) {
        newArray.push(i);
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
    return _.reduce(arr, function(sum, i) {
      if (i === item) {
        sum = sum + 1;
      }

      return sum;
    }, 0);
  },

  duplicates: function(arr) {
    var sortedArr = arr.sort();

    return _.reduce(sortedArr, function(dupes, item, index) {
      // If the current item is the same as the last
      // and it's not already in the dupes array, add it.
      if (item === sortedArr[index - 1] && dupes.indexOf(item) === -1) {
        dupes.push(item);
      }

      return dupes;
    }, []);
  },

  square: function(arr) {
    return _.reduce(arr, function(squares, i) {
      squares.push(i * i);
      return squares;
    }, []);
  },

  findAllOccurrences: function(arr, target) {
    return _.reduce(arr, function(indices, item, index) {
      if (item === target) {
        indices.push(index);
      }

      return indices;
    }, []);
  }
};
