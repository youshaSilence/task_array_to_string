const { generateString, removeLastComma } = require('./processString');

const convert = async (numbers) => {
    let str = '';
    let startChunk = numbers[0]; // Иницируем первую часть
    let endChunk = numbers[0];

    for (let i = 1; i < numbers.length; i += 1) {
        if ((endChunk + 1) === numbers[i]) {
            endChunk +=1; // Обновляем актуальный конец отрезка
        } else {
            // Генерируем часть строки из получившегося отрезка
            str += await generateString(startChunk, endChunk);
            startChunk = numbers[i]; // Обновляем переменные границ отрезка
            endChunk = numbers[i];
        }
    }
    str += await generateString(startChunk, endChunk); // Добавляем оставшийся кусок к строке
    str = removeLastComma(str);
    return str;
};

module.exports = convert;
