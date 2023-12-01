class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    caculateArea() {
        return this.width * this.height
         }
    }
 
    const rectangle = new Rectangle(5,10)


    console.log('Area:' ,
    rectangle.caculateArea())
