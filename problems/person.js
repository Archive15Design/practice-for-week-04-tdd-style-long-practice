class Person {
  constructor(name, age, greetingMessage = 'Hello!'){
    if (typeof name !== 'string'){
      throw new Error('Name must be a string');
    } else if (typeof age !== 'number'){
      throw new Error('Age must be a number');
    }

    this.name = name;
    this.age = age;
    this.greetingMessage = greetingMessage;
  }

  sayHello(){
    return this.greetingMessage;
  }

  visit(otherPerson){
    if (!(otherPerson instanceof Person)){
      throw new Error('Argument must be instance of Person class');
    }
    const msg = `${this.name} visited ${otherPerson.name}`;
    return msg;
  }

  switchVisit(otherPerson){
    return otherPerson.visit(this);
  }

  update(obj){
    if (typeof obj !== 'object'){
      throw new TypeError('Argument must be an object');
    } else if (obj.name === undefined || obj.age === undefined){
      throw new TypeError('Argument must have name and age properties');
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj){
    try {
      this.update(obj);
    } catch(error){
      return false;
    }
    return true;
  }

  static greetAll(array){
    let outputArray = [];
    for (const person of array){
      outputArray.push(person.sayHello());
    }
    return outputArray;
  }

}

module.exports = Person;
