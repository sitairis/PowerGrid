import Consumer from '../consumers/Consumer.js';

describe("countConsumptionVolume", () => {

    let equalParams = [
        {
            testPeriod: 900,
            testCountFlats: 350,
            message: `при подсчете с дробным периодом ${this.testPeriod} ожидаемое значение `
        },
        {
            testPeriod: 360.7,
            testCountFlats: 400,
            message: `при подсчете с дробным периодом ${this.testPeriod} ожидаемое значение `
        }
    ];

    equalParams.forEach((param) => {

        let calc = new Consumer('testAddress', param.testCountFlats);

        let expected = param.testCountFlats * 5/24 * param.testPeriod;

        it(`${param.message} ${expected}`, () => {
            assert.equal(calc.countConsumptionVolume(param.testPeriod), expected);
        });
    });

    let typeOfParams = [
        {
            testPeriod: 'string',
            testCountFlats: 350,
            message: `при подсчете с периодом ${this.testPeriod} ожидается ошибка`
        },
        {
            testPeriod: -900,
            testCountFlats: 400,
            message: `при подсчете с периодом ${this.testPeriod} ожидается ошибка`
        }
    ];

    typeOfParams.forEach((param) => {
        let calc = new Consumer('testAddress', param.testCountFlats);

        it(`${param.message}`, () => {
            assert.typeOf(calc.countConsumptionVolume(param.testPeriod), 'error', 'calc.countConsumptionVolume returns an error');
        });
    });
});