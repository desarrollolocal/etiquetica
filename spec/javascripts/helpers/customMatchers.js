var customMatchers = {

  toHaveOwnProperty: function(util, customEqualityTesters) {

    return {

      compare: function(actual, expected) {

        if (expected === undefined) {
          expected = '';
        }

        var result = {};
        result.pass = actual.hasOwnProperty(expected);

        if (result.pass) {

          result.message = "Expected the collection to contain an object with the expected key";
        } else {

          result.message = "Expected the collection to contain an object with the expected key but was not found";
        }

        return result;
      }
    };
  }
};