const assert = require('assert');

require('../stream');

describe('Stream methods test', function() {
  let list;
  before(function() {
    list = [
      {
        name: 'Cael',
        age: 20,
        info: {
          'birth-year': 1987
        }
      },
      {
        name: 'Ueda',
        age: 10
      },
      {
        name: 'Celestino',
        age: 30
      },
      {
        name: 'Lee'
      }
    ];
  });

  it('should return average of age from array of objects', function() {
    assert.equal(list.stream().average('age'), 20);
  });
});
