class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`);
    }
}


let person1 = new Person("Carlos", 30);


person1.introduce();
