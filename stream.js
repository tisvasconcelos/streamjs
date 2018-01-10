'use strict';

Array.prototype.stream = function() {
  let array = this;

  let sum = (key) => {
    let result = 0;
    array.filter(item => item[key] && (result += item[key]));
    return result;
  }

  return {
    average(key) {
      let result;
      let length = array.filter(item => item[key]).length;
      return (sum(key) / length);
    }
  }
};
