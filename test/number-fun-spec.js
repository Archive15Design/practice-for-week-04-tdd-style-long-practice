const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('Returns Three', function(){

    it('should return three', function(){
        expect(returnsThree()).to.equal(3);
    })
});

context('Reciprocal, invalid arguments', function(){

    it('only accept positive numbers', () => {
        expect(() => reciprocal(-12)).to.throw(RangeError);
    });

    it('should return an error for input values above 100 000', () => {
        expect(() => reciprocal(101000)).to.throw(RangeError);
    });
});

context('Reciprocal, valid arguments', () => {

    it ('should return the reciprocal', function(){
        expect(reciprocal(5)).to.equal(0.2);
    });

    const testArray = reciprocal(5, 8);
    let val1 = 0.2;
    let val2 = 0.125;
    it ('should work with multiple inputs', function() {
        expect(testArray[0], testArray[1]).to.eq(val1, val2);
    });
});
