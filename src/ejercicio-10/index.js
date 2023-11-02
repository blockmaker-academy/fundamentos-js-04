class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);  
        this.grade = grade;  
    }

    introduce() {
        console.log(`Hola, soy ${this.name}, tengo ${this.age} años y estoy en el grado ${this.grade}.`);
    }
}


let student1 = new Student("Andrea", 20, "10° grado");


student1.introduce();  
