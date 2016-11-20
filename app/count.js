exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    // No side-effects
    var i = start;
    var counterId;

    var logNum = function () {
      if (i <= end) {
        console.log(i);
        i++;
        counterId = setTimeout(logNum, 100);
      }
    };

    logNum();

    return {
      cancel: function () {
        clearTimeout(counterId);
      }
    };
  }
};
