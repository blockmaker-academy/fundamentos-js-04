class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    introduce(){
        console.log (`hola, soy ${this.name} y
    tengo ${this.age} años.`)

    }
}



class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
    
    introduce() {
        console.log(` hola, soy ${this.name},
        tengo ${this.age} años y estoy en el
         grado ${this.grade}.`)

    }
}

const student = new Student('Bob', 19,12)
student.introduce()