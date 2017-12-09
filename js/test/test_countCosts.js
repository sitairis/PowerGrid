let expect = require("chai").expect;
let Grid = require('../Grid');
let Consumer = require('../consumers/Consumer');
let PowerLine = require('../sources/PowerLine');

describe("countCosts", () => {

    let params = [
        {
            testPrice: 200,
            testPeriod: 60,
            testCountFlats: 350,
            testPowerLine: 10,
            testLinePrice: 10.21,
            expected:504147024,
            message: `при подсчете затрат на транспортировку и потребление энергии ожидаемое значение`
        },
        {
            testPrice:35,
            testPeriod: 70,
            testCountFlats: 400,
            testPowerLine: 70,
            testLinePrice: 11.8,
            expected: 118987680,
            message: `при подсчете затрат на транспортировку и потребление энергии ожидаемое значение`
        }
    ];

    params.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerLines = new PowerLine(`testLine1`, param.testPowerLine, param.testLinePrice);
        calc.consumers = new Consumer(`testAddress`, param.testCountFlats);

        it(`${param.message} ${param.expected}`, () => {
            expect(calc.countCosts()).to.equal(param.expected);
        });
    });
});
