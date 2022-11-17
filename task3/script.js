/*
    Написать класс, который посчитает площадь любых фигур (не будем усложнять, пусть будут только классы Square, Rectangle).
    Например, calcFunc([new Square(10), new Rectangle(10, 5)]) = 150
    идея реализации должна быть такой, чтобы было довольно просто добавить новую фигуру, например, Circle.
*/

class Calc {
    summ;

    constructor(arr) {
        this.summ = !arr
            ? 0
            : arr.reduce((prev, curr) => prev.valueOf() + curr.valueOf(), 0);
    }

    valueOf() {
        return this.summ;
    }
}

class Figure extends Calc {
    square;
    constructor() {
        super();
        this.square = 0;
    }

    valueOf() {
        return this.square;
    }
}

class Square extends Figure {
    constructor(length) {
        super();
        this.square = length * length;
    }
}

class Rectangle extends Figure {
    constructor(length, width) {
        super();
        this.square = Math.abs(length) * Math.abs(width);
    }
}

const calc = new Calc([new Square(10), new Rectangle(10, 5)]);

console.log(calc.valueOf());
/*
console.log(
    'Кейс calcFunc([new Square(10), new Rectangle(10, 5)])',
    'ожидаемое значение: 150',
    'Получили: ',
    calcFunc([new Square(10), new Rectangle(10, 5)])
);

console.log(
    'Кейс calcFunc([new Square(5), new Rectangle(-5, 3)])',
    'ожидаемое значение: 40',
    'Получили: ',
    calcFunc([new Square(5), new Rectangle(-5, 3)])
);
*/
