exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    var newArray = [];

    var innerFunc = function (arg) {
      return function () {
        return fn(arg);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      newArray.push(innerFunc(arr[i]));
    }

    return newArray;
  },

  partial: function(fn, str1, str2) {
    return function (arg) {
      return fn(str1, str2, arg);
    };
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {
    // TODO: Review
    // arguments isn't really an array, so we need to create
    // an array based off a slice of the arguments just dropping the first arg.
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    // Get any args passed besides the function
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      // TODO: Review
      // Can't directly concat arguments. End up with a nested array.
      var args2 = Array.prototype.slice.call(arguments);
      return fn.apply(null, args.concat(args2));
    };
  },

  curryIt: function(fn) {
    // TODO: Review
  }
};
