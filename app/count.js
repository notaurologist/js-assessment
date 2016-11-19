exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    return {
      cancel: function () {
        clearInterval(counterId);
      }
    };
  }
};
