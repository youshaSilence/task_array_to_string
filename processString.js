const generateString = async (start, end) => {
    let str = '';
    if (start === end) {
        str += `${start},`;
    } else {
        if ((end - start) === 1) {
            str += `${start},${end},`;
        } else {
            str += `${start}-${end},`;
        }
    }
    return str;
};

const removeLastComma = str => str.substring(0, str.length-1);

module.exports = { generateString, removeLastComma };
