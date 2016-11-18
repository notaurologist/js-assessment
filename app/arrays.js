exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArray.push(arr[i]);
      }
    }

    return newArray;
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
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        sum += 1;
      }
    }

    return sum;
  },

  duplicates: function(arr) {
    var dupes = [];
    var sortedArr = arr.sort();
    for (var i = 0; i < sortedArr.length; i++) {
      var curr = sortedArr[i];
      // If the current item is the same as the last
      // and it's not already in the dupes array, add it.
      if (curr === arr[i - 1] && dupes.indexOf(curr) === -1) {
        dupes.push(curr);
      }
    }

    return dupes;
  },

  square: function(arr) {
    var squares = [];
    for (var i = 0; i < arr.length; i++) {
      squares.push(arr[i] * arr[i]);
    }

    return squares;
  },

  findAllOccurrences: function(arr, target) {
    var indices = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        indices.push(i);
      }
    }

    return indices;
  }
};
