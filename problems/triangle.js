class Triangle {
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;

        this.isValid = false;
    }

    getPerimeter(){
        const perimeter = this.side1 + this.side2 + this.side3;
        return perimeter;
    }

    hasValidSideLengths(){
        const sum1 = this.side1 + this.side2;
        const sum2 = this.side1 + this.side3;
        const sum3 = this.side2 + this.side3;

        if (sum1 <= this.side3 || sum2 <= this.side2 || sum3 <= this.side1){
            return false;
        } else {
            return true;
        }
    }

    validate(){
        if (this.hasValidSideLengths()){
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    static getValidTriangles(...triangles){
        let validTriangles = [];

        for (const triangle of triangles){
            triangle.validate();

            if (triangle.isValid){
                validTriangles.push(triangle);
            }
        }

        return validTriangles;
    }
}

class Scalene extends Triangle {
    constructor (side1, side2, side3) {
        super(side1, side2, side3);
        this.isValid = this.hasValidSideLengths();
    }

    isScalene(){
        if(this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3){
            return false;
        } else {
            return true;
        }
    }

    validate(){
        if (this.isScalene()){
            this.isValidScalene = true;
        } else {
            this.isValidScalene = false;
        }
    }
}

class Isosceles extends Triangle {
 constructor(side1, side2, side3){
    super(side1, side2, side3);
    this.isValid = this.hasValidSideLengths();
 }

 isIsosceles(){
    if(this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
        return true;
    } else {
        return false;
    }
 }

 validate(){
    if(this.isIsosceles()){
        this.isValidIsosceles = true;
    } else {
        this.isValidIsosceles = false;
    }
 }
}

const test = new Isosceles(3, 3, 6);
const test2 = new Isosceles(3, 4, 6);
console.log(test.isIsosceles());
console.log(test2.isIsosceles());

module.exports = {
    Triangle,
    Scalene,
    Isosceles
};
