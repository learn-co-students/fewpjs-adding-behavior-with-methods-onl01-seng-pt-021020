class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return(`${this.name} says meow!`);
      }
  }
   
  class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    } 

    speak() {
        return(`${this.name} says woof!`);
      } 
}
   
  class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        let maleSpeech = `It's me! ${this.name}, the parrot!`;
        let femaleSpeech = `${this.name} says squawk!`;
        return this.sex === 'female' ? femaleSpeech : maleSpeech;
      } 
  }