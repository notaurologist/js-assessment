exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // Using native promises because support is there
    // for modern browsers, and jQuery deferreds are NOT promises.
    return new Promise(function (resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function (resolve, reject) {
      $.getJSON(url).then(function (response) {
        var peeps = response.people.map(function (person) {
          return person.name;
        });

        resolve(peeps.sort());
      });
    });
  }
};
