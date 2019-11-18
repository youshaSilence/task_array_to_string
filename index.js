const { generateString, removeLastComma } = require('./processString');

const arrayToString = (numbers  ) => {
    let str = '';
    let startChunk = numbers[0]; // Иницируем первую часть
    let endChunk = numbers[0];

    for (let i = 1; i < numbers.length; i += 1) {
        if ((endChunk + 1) === numbers[i]) {
            endChunk +=1; // Обновляем актуальный конец отрезка
        } else {
            // Генерируем часть строки из получившегося отрезка (единственный асинхронный момент)
            setTimeout(str += generateString(startChunk, endChunk), 0);
            startChunk = numbers[i]; // Обновляем переменные границ отрезка
            endChunk = numbers[i];
        }
    }
    str += generateString(startChunk, endChunk); // Добавляем оставшийся кусок к строке
    str = removeLastComma(str);
    return str;
};

module.exports = arrayToString;
