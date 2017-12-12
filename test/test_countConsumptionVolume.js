let expect = require("chai").expect;
let Consumer = require('../consumers/Consumer');

describe("countConsumptionVolume", () => {

    let equalParams = [
        {
            testPeriod: 90,
            testCountFlats: 350,
            expected: 157500,
            message: `при подсчете с дробным периодом ${this.testPeriod} ожидаемое значение `
        },
        {
            testPeriod: 36.7,
            testCountFlats: 400,
            expected: 73400,
            message: `при подсчете с дробным периодом ${this.testPeriod} ожидаемое значение `
        }
    ];

    equalParams.forEach((param) => {

        let calc = new Consumer('testAddress', param.testCountFlats);


        it(`${param.message} ${param.expected}`, () => {
            expect(calc.countConsumptionVolume(param.testPeriod)).to.equal(param.expected);
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
            expect(calc.countConsumptionVolume(param.testPeriod)).to.be.a('Error');
        });
    });
});