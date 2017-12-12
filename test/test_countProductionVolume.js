let expect = require("chai").expect;
let Source = require('../sources/Source');

describe("countProductionVolume", () => {

    let equalParams = [
        {
            testPower: 100,
            testPeriod: 900,
            expected: 90000,
            message: `при подсчете с периодом 900 ожидаемое значение`
        },
        {
            testPower: 55,
            testPeriod: 360.7,
            expected: 19839,
            message: `при подсчете с периодом 360.7 ожидаемое значение`
        }
    ];

    equalParams.forEach((param) => {

        let calc = new Source('testName', param.testPower);

        it(`${param.message} ${param.expected}`, () => {
            expect(calc.countProductionVolume(param.testPeriod)).to.equal(param.expected);
        });
    });

    let typeOfParams = [
        {
            testPower: 43,
            testPeriod: 'string',
            message: `при подсчете с периодом 'string' ожидается ошибку`
        },
        {
            testPower: 55,
            testPeriod: -360,
            message: `при подсчете с отрицательным периодом ожидается ошибку`
        }
    ];

    typeOfParams.forEach((param) => {

        let calc = new Source('testName', param.testPower);

        it(`${param.message}`, () => {
            expect(calc.countProductionVolume(param.testPeriod)).to.be.a('error');
        });
    });
});
