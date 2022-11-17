/*
    Написать функцию, которая принимает массив слов, а выводит массив
    уникальных слов отсортированных по количеству повторов этого слова.
    Например, на вход передаем массив ['fruit', 'keyboard', 'banana',
    'banana', 'keyboard', 'banana'], на выходе ['banana', 'keyboard',
    'fruit']
*/

function sortFruit(arr) {
    const fruitCollection = new Map();
    arr.forEach((el) => {
        fruitCollection.has(el)
            ? fruitCollection.set(el, fruitCollection.get(el) + 1)
            : fruitCollection.set(el, 1);
    });
    const sortedFruit = [...fruitCollection.entries()].sort(
        (a, b) => b[1] - a[1]
    );
    return sortedFruit.map((el) => {
        return el[0];
    });
}

console.log(
    "ожидаемое значение: ['banana', 'keyboard','fruit']",
    'Получили: ',
    sortFruit(['fruit', 'keyboard', 'banana', 'banana', 'keyboard', 'banana'])
);
console.log('ожидаемое значение: []', 'Получили: ', sortFruit([]));
