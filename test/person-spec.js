const chai = require('chai')
  , spies = require('chai-spies');

chai.use(spies);

const should = chai.should()
  , expect = chai.expect;
const Person = require('../problems/person');

describe ('Person Class', () => {

    let julia, josef;
    beforeEach(() => {
        julia = new Person('Julia', 30, 'Hello, I like science!');
        josef = new Person('Josef', 25, 'Heyo!');
    });

    context ('Constructor', () => {
        it ('should have "name" property', () => {
            expect(julia).to.have.property('name');
        });

        it ('should have an "age" property', () => {
            expect(julia).to.have.property('age');
        });

        it ('should have a greeting message property', () => {
            expect(julia).to.have.property('greetingMessage');
        });

        it ('should set default greetingMessage if no argument given', () => {
            let person = new Person('Person', 30);
            expect(person.greetingMessage).to.eq('Hello!');
        });
    });

    context('Constructor, invalid arguments', () => {

        it ('should return error if "name" is not a string', () => {
            expect(() => {let test = new Person(1, 30, 'Hello')}).to.throw();
        });

        it ('should return error if age is not a number', () => {
            expect(() => {let test = new Person('test', 'thirty', 'Hello')}).to.throw();
        });

    });

    context ('Instance methods', () => {

        describe('sayHello Method', () => {

            it('should have a sayHello method', () => {
                expect(julia.sayHello).to.exist;
            });

            it('sayHello should return greeting message', () => {
                expect(julia.sayHello()).to.equal('Hello, I like science!');
            });
        });

        describe('visit Method', () => {

            it('should have a visit method', () => {
                expect(julia.visit).to.exist;
            });

            it('visit should return message that person visited another person', () => {
                expect(julia.visit(josef)).to.equal('Julia visited Josef');
            });

            it('should throw an error if not passed Person object', () => {
                expect(() => {julia.visit('Josef')}).to.throw();
            });

        });

        describe('switchVisit Method', () => {

            it('shoud have a switchVisit method', () => {
                expect(julia.switchVisit).to.exist;
            });

            it('should return message by invoking visit on other Person', () => {
                expect(julia.switchVisit(josef)).to.equal('Josef visited Julia');
            });

        });

        describe('update Method', () => {
            context('Valid arguments', () => {

                it('should have an update method', () => {
                    expect(julia.update).to.exist;
                });

                it('should update properties as expected', () => {
                    let obj = {'name': "newJulia", 'age': "40"};
                    julia.update(obj);
                    expect(julia.name, julia.age).to.equal("newJulia", "40");
                });

            });

            context('Invalid arguments', () => {

                it('should throw an error if update is not passed an object', () => {
                    expect(() => julia.update('Josef')).to.throw(TypeError);
                });

                it('should throw error if object does not have right properties', () => {
                    let obj = {"name": "newJulia"};
                    expect(() => julia.update(obj)).to.throw(TypeError);
                });

            });
        });

        describe('tryUpdate method', () => {

            let obj;
            beforeEach(() => {
                obj = {'name': "newJulia", 'age': "40"};
            })

            it('should have a tryUpdate method', () => {
                expect(julia.tryUpdate).to.exist;
            });

            it('should accept an object as argument', () => {
                expect(() => julia.tryUpdate(obj)).to.not.throw();
            })

            it('should return true if update() does not throw errors', () => {
                expect(julia.tryUpdate(obj)).to.equal(true);
            });

            it('should return false if update is called with invalid argument', () => {
                expect(julia.tryUpdate('notObject')).to.equal(false);
            });

        });



    });

    context ('Static Methods', () => {

        describe('greetAll method', () => {

            const spy = chai.spy;

            let personArr;
            beforeEach(() => {
                personArr = [
                    julia,
                    josef
                ];
            });

            it('should have a greetAll method', () => {
                expect(Person.greetAll).to.exist;
            });

            it('greetAll should accept an array', () => {
                expect(() => Person.greetAll(personArr)).to.not.throw();
            });

            it('expect greetAll to return array of strings', () => {
                expect(Person.greetAll(personArr)).deep.to.eq([
                    'Hello, I like science!',
                    'Heyo!']);
            });
        });
    });
});
