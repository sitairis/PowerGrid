let expect = require("chai").expect;
let PowerLine = require('../sources/PowerLine');

describe("countTransportPrice", () => {

    let equalParams = [
        {
            testPeriod: 900,
            testPowerLine: 10,
            testLinePrice: 10.21,
            expected: 91890,
            message: `при подсчете ожидаемое значение`
        },
        {
            testPeriod: 36,
            testPowerLine:70,
            testLinePrice: 11.8,
            expected: 29736,
            message: `при подсчете ожидаемое значение`
        }
    ];

    equalParams.forEach((param) => {
        let calc = new PowerLine('testName', param.testPowerLine, param.testLinePrice);

        it(`${param.message} ${param.expected}`, () => {
            expect(calc.countTransportPrice(param.testPeriod)).to.equal(param.expected);
        });
    });

    let typeOfParams = [
        {
            testPeriod: -900,
            testPowerLine: 10,
            testLinePrice: 10.21,
            message: `при подсчете с отрицательным периодом ожидается ошибка`
        },
        {
            testPeriod: 'string',
            testPowerLine:70,
            testLinePrice: 11.8,
            message: `при подсчете с периодом 'string' ожидается ошибка`
        }
    ];

    typeOfParams.forEach((param) => {

        let calc = new PowerLine('testName', param.testPowerLine, param.testLinePrice);

        it(`${param.message}`, () => {
            expect(calc.countTransportPrice(param.testPeriod)).to.be.a('error');
        });
    });
});