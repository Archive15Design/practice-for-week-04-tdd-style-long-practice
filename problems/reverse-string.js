module.exports = function reverseString(string) {
  if (typeof string !== 'string'){
    throw new TypeError('Must provide a string');
  }
  return string.split('').reverse().join('');
};
