let { expect } = require('chai');
let reverseString = require('../problems/reverse-string');

describe ("Reverse String", function() {

    it('should return error if not passed a string', function(){
        expect(() => reverseString(null)).to.throw(TypeError);
    });

    it('should reverse a string passed to it', function(){
        expect(reverseString('fun')).to.eq('nuf');
    });

});
