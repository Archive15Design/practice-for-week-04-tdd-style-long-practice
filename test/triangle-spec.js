const chai = require('chai')
  , spies = require('chai-spies');

chai.use(spies);

const should = chai.should()
  , expect = chai.expect;
const { Triangle, Scalene, Isosceles } = require('../problems/triangle');

describe ('Triangle Class', () => {

    let triangle;
    beforeEach(() => {
        triangle = new Triangle(2, 4, 5);
    });

    afterEach(() => {
        triangle = null;
    })

    context('Constructor', () => {

        it('Should create an instance of Triangle class', () => {
            expect(triangle).to.be.instanceof(Triangle);
        });

        it('should have properties: side1, side2, side3 and isValid', () => {
            expect(triangle).to.have.all.keys('side1', 'side2', 'side3', 'isValid');
        });

        it('should initialize sides from arguments', () => {
            expect(triangle.side1, triangle.side2, triangle.side3).to.eq(2, 3, 5);
        });

        it('should initialize isValid to false', () => {
            expect(triangle.isValid).to.eq(false);
        });
    });

    context('Instance Methods', () => {

        describe('getPerimeter method', () => {

            it('should have a method called getPerimeter', () => {
                expect(triangle.getPerimeter).to.exist;
            });

            it('should return the triangles perimeter', () => {
                expect(triangle.getPerimeter()).to.equal(11);
            });
        });

        describe('hasValidSideLengths method', () => {

            it('should have a method called hasValidSideLengths', () => {
                expect(triangle.hasValidSideLengths).to.exist;
            });

            it('should return true if triangle has valid sides', () => {
                expect(triangle.hasValidSideLengths()).to.eq(true);
            });

            it('should return false if triangle has invalid sides', () => {
                const wrongTriangle = new Triangle(2, 3, 10);
                expect(wrongTriangle.hasValidSideLengths()).to.eq(false);
            });
        });

        describe('validate() method', () => {

            it('should have a method called validate', () => {
                expect(triangle.validate).to.exist;
            });

            it('should set isValid when called', () => {
                expect(triangle.isValid).to.equal(false);
                triangle.validate();
                expect(triangle.isValid).to.eq(true);
            });

            it('should set isValid to false if not valid triangle', () => {
                invalidTriangle = new Triangle(1, 1, 4);
                invalidTriangle.validate();
                expect(invalidTriangle.isValid).to.eq(false);
            })

        });

    });

    context('Static Methods', () => {
        describe('getValidTriangles method', () => {
            const triangle = new Triangle(2, 4, 5);
            const triangle2 = new Triangle(2, 3, 4);
            const triangle3 = new Triangle(2, 5, 4);
            const invalidTriangle1 = new Triangle(1, 1, 4);
            const invalidTriangle2 = new Triangle(1, 1, 6);

            it('should have a getValidTriangles method', () => {
                expect(Triangle.getValidTriangles).to.exist;
            });

            it('should return an array of valid triangles', () => {
                const validTriangles = [];
                validTriangles.push(triangle, triangle2, triangle3)
                expect(Triangle.getValidTriangles(triangle, triangle2, triangle3, invalidTriangle1, invalidTriangle2)).to.deep.eq(validTriangles);
            });
        });
    });

});

describe('Scalene Class', () => {

    let scaleneTriangle1;
    let scaleneTriangle2;
    let scaleneTriangle3;
    let notScalene1;
    let notScalene2;
    let notScalene3;

    beforeEach(() => {
        scaleneTriangle1 = new Scalene(3, 5, 4);
        scaleneTriangle2 = new Scalene(8, 9, 7);
        scaleneTriangle3 = new Scalene(4, 3, 6);
        notScalene1 = new Scalene(2, 2, 4);
        notScalene2 = new Scalene(4, 4, 4);
        notScalene3 = new Scalene(12, 12, 8);
    });
    afterEach(() => {
        scaleneTriangle1 = null;
        scaleneTriangle2 = null;
        scaleneTriangle3 = null;
        notScalene1 = null;
        notScalene2 = null;
        notScalene3 = null;
    });

    context('Constructor', () => {

        it('should be an instance of Scalene', () => {
            expect(scaleneTriangle1).to.be.instanceOf(Scalene);
            expect(scaleneTriangle2).to.be.instanceOf(Scalene);
            expect(scaleneTriangle3).to.be.instanceOf(Scalene);
        })

        it('should be a child of Triangle', () => {
            expect(scaleneTriangle1).to.be.instanceOf(Triangle);
            expect(scaleneTriangle2).to.be.instanceOf(Triangle);
            expect(scaleneTriangle3).to.be.instanceOf(Triangle);
        });

        it('Should have three sides and isValid properties', () => {
            expect(scaleneTriangle1).to.have.all.keys('side1', 'side2', 'side3', 'isValid');
            expect(scaleneTriangle2).to.have.all.keys('side1', 'side2', 'side3', 'isValid');
            expect(scaleneTriangle3).to.have.all.keys('side1', 'side2', 'side3', 'isValid');
        });

        it('should initialize isValid correctly', () => {
            expect(scaleneTriangle1.isValid).to.be.true;
            expect(scaleneTriangle2.isValid).to.be.true;
            expect(scaleneTriangle3.isValid).to.be.true;
        });
    });

    context('Instance methods', () => {
        describe('IsScalene() method', () => {

            it('should have a IsScalene() method', () => {
                expect(scaleneTriangle1.isScalene).to.exist;
                expect(scaleneTriangle2.isScalene).to.exist;
                expect(scaleneTriangle3.isScalene).to.exist;
            });

            it('isScalene should return true if triangle is a valid Scalene', () => {
                expect(scaleneTriangle1.isScalene()).to.eq(true);
                expect(scaleneTriangle2.isScalene()).to.eq(true);
                expect(scaleneTriangle3.isScalene()).to.eq(true);
            });

            it('isScalene should return false if triangle is not Scalene', () => {
                expect(notScalene1.isScalene()).to.eq(false);
                expect(notScalene2.isScalene()).to.eq(false);
                expect(notScalene3.isScalene()).to.eq(false);
            });

        });

        describe('validate() method', () => {

            it('should have a validate() method', () => {
                expect(scaleneTriangle1.validate).to.exist;
                expect(scaleneTriangle2.validate).to.exist;
                expect(scaleneTriangle3.validate).to.exist;
            });

            beforeEach(() => {
                scaleneTriangle1.validate();
                scaleneTriangle2.validate();
                scaleneTriangle3.validate();
                notScalene1.validate();
                notScalene2.validate();
                notScalene3.validate();
            });

            it('should NOT be inherited from Triangle', () => {
                expect(scaleneTriangle1).to.have.property('isValidScalene');
                expect(scaleneTriangle2).to.have.property('isValidScalene');
                expect(scaleneTriangle3).to.have.property('isValidScalene');
            });

            it('should set isValidScalene value correctly', () => {
                expect(scaleneTriangle1.isValidScalene).to.eq(true);
                expect(scaleneTriangle2.isValidScalene).to.eq(true);
                expect(scaleneTriangle3.isValidScalene).to.eq(true);
                expect(notScalene1.isValidScalene).to.eq(false);
                expect(notScalene2.isValidScalene).to.eq(false);
                expect(notScalene3.isValidScalene).to.eq(false);
            })
        })
    });
});

describe('Isosceles Class', () => {
    let isoscelesTriangle1;
    let isoscelesTriangle2;
    let notIsosceles1;
    let notIsosceles2;
    beforeEach(() => {
        isoscelesTriangle1 = new Isosceles(3, 3, 5);
        isoscelesTriangle2 = new Isosceles(6, 6, 10);
        notIsosceles1 = new Isosceles(3, 4, 5);
        notIsosceles2 = new Isosceles(3, 6, 5);
    });
    afterEach(() => {
        isoscelesTriangle1 = null;
        isoscelesTriangle2 = null;
        notIsosceles1 = null;
        notIsosceles2 = null;
    });

    context('#constructor', () => {
        it('should be an instance of Isosceles', () => {
            expect(isoscelesTriangle1).to.be.instanceOf(Isosceles);
            expect(isoscelesTriangle2).to.be.instanceOf(Isosceles);
        });

        it('should be a child of Triangle', () => {
            expect(isoscelesTriangle1).to.be.instanceOf(Triangle);
            expect(isoscelesTriangle2).to.be.instanceOf(Triangle);
        });

        it('should have the following properties: side1, side2, side3, isValid', () => {
            expect(isoscelesTriangle1).to.have.all.keys('side1', 'side2', 'side3', 'isValid');
            expect(isoscelesTriangle2).to.have.all.keys('side1', 'side2', 'side3', 'isValid');
        });

        it('should set isValid correctly', () => {
            let invalidTriangle = new Isosceles(1, 1, 5);
            expect(isoscelesTriangle1.isValid).to.eq(true);
            expect(isoscelesTriangle2.isValid).to.eq(true);
            expect(invalidTriangle.isValid).to.eq(false);
        });
    });

    context('#Instance Methods', () => {
        describe('isIsosceles() method', () => {
            it('should have a isIsosceles method', () => {
                expect(isoscelesTriangle1.isIsosceles).to.exist;
                expect(isoscelesTriangle2.isIsosceles).to.exist;
            });

            it('should return true if triangle is Isosceles', () => {
                expect(isoscelesTriangle1.isIsosceles()).to.eq(true);
                expect(isoscelesTriangle2.isIsosceles()).to.eq(true);
                expect(notIsosceles1.isIsosceles()).to.eq(false);
                expect(notIsosceles2.isIsosceles()).to.eq(false);
            });

        });

        describe('validate() method', () => {
            it('should have a validate method', () => {
                expect(isoscelesTriangle1.validate).to.exist;
                expect(isoscelesTriangle2.validate).to.exist;
            });

            beforeEach(() => {
                isoscelesTriangle1.validate();
                isoscelesTriangle2.validate();
                notIsosceles1.validate();
                notIsosceles2.validate();
            });

            it('should NOT be inherited from Triangle', () => {
                expect(isoscelesTriangle1).to.have.property('isValidIsosceles');
                expect(isoscelesTriangle2).to.have.property('isValidIsosceles');
            });

            it('should set isValidIsosceles if triangle is valid isosceles', () => {
                expect(isoscelesTriangle1.isValidIsosceles).to.eq(true);
                expect(isoscelesTriangle2.isValidIsosceles).to.eq(true);
                expect(notIsosceles1.isValidIsosceles).to.eq(false);
                expect(notIsosceles2.isValidIsosceles).to.eq(false);
            });
        });
    });
});
