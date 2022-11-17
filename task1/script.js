function argMultiplier(...rest) {
    return rest.map((el, i) => {
        console.log(el);
        return el * rest.length;
    });
}

console.log(
    'ожидаемое значение: [7, 28, 35, 42, 21, 14, 42]',
    'Получили: ',
    argMultiplier(1, 4, 5, 6, 3, 2, 6)
);
console.log('ожидаемое значение: []', 'Получили: ', argMultiplier());
