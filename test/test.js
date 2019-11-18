const convertArray = require('../index');

describe('Should convert array of numbers to string', () => {
    test('[1,2,3,4,5,6,7,8] -> "1-8"', async () => {
        const result = await convertArray([1,2,3,4,5,6,7,8]);
        expect(result).toBe('1-8');
    });

    test('[1,3,4,5,6,7,8] -> "1,3-8"', async () => {
        const result = await convertArray([1,3,4,5,6,7,8]);
        expect(result).toBe('1,3-8');
    });

    test('[1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"', async () => {
        const result = await convertArray([1,3,4,5,6,7,8,10,11,12]);
        expect(result).toBe('1,3-8,10-12');
    });

    test('[1,2,3] -> "1-3"', async () => {
        const result = await convertArray([1,2,3]);
        expect(result).toBe('1-3');
    });

    test('[1,2] -> "1,2"', async () => {
        const result = await convertArray([1,2]);
        expect(result).toBe('1,2');
    });

    test('[1,2,4] -> "1,2,4"', async () => {
        const result = await convertArray([1,2,4]);
        expect(result).toBe('1,2,4');
    });

    test('[1,2,4,5,6] -> "1,2,4-6"', async () => {
        const result = await convertArray([1,2,4,5,6]);
        expect(result).toBe('1,2,4-6');
    });

    test('[1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21"', async () => {
        const result = await convertArray([1,2,3,7,8,9,15,17,19,20,21]);
        expect(result).toBe('1-3,7-9,15,17,19-21');
    });

    test('[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002"', async () => {
        const result = await convertArray([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]);
        expect(result).toBe('1-6,100,1091,1999-2002');
    });

    test('[1] -> "1"', async () => {
        const result = await convertArray([1]);
        expect(result).toBe('1');
    });

    test('[1,3,5,7,9,11] -> "1,3,5,7,9,11"', async () => {
        const result = await convertArray([1,3,5,7,9,11]);
        expect(result).toBe('1,3,5,7,9,11');
    });
});
