/*
    Написать класс, который посчитает площадь любых фигур (не будем усложнять, пусть будут только классы Square, Rectangle).
    Например, calcFunc([new Square(10), new Rectangle(10, 5)]) = 150
    идея реализации должна быть такой, чтобы было довольно просто добавить новую фигуру, например, Circle.
*/

const calcFunc = function (arr) {
    return arr.reduce((prev, curr) => prev.valueOf() + curr.valueOf(), 0);
};

class Figure {
    square;
    constructor() {
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
