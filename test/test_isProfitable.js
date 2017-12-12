let expect = require("chai").expect;
let Grid = require('../Grid');
let Consumer = require('../consumers/Consumer');
let SolarPanel = require('../sources/SolarPanel');
let PowerStation = require('../sources/PowerStation');
let PowerLine = require('../sources/PowerLine');

describe("isProfitable", () => {

    let positiveParams = [
        {
            testPrice: 10,
            testPeriod: 55,
            testPowerStation: 95,
            testPowerPanel: 4,
            testCountFlats: 10,
            testPowerLine: 220,
            testLinePrice: 0.21,
            msgTypeOf:`возвращает ли функция boolean`,
            msgEqual: `при проверке на прибыльность ожидаемое значение true`
        },
        {
            testPrice:15,
            testPeriod: 72,
            testPowerStation:86,
            testPowerPanel:3,
            testCountFlats: 15,
            testPowerLine: 36,
            testLinePrice: 0.51,
            msgTypeOf:`возвращает ли функция boolean`,
            msgEqual: `при проверке на прибыльность ожидаемое значение true`
        }
    ];

    positiveParams.forEach((param) => {
        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);
        calc.consumers = new Consumer(`testAddress`, param.testCountFlats);
        calc.powerLines = new PowerLine(`testLine1`, param.testPowerLine, param.testLinePrice);

        it(`${param.msgTypeOf}`, () => {
            expect(calc.isProfitable()).to.be.a(`boolean`);
        });

        it(`${param.msgEqual}`, () => {
            expect(calc.isProfitable()).to.equal(true);
        });
    });

    let negativeParams = [
        {
            testPrice: 100,
            testPeriod: 40,
            testPowerStation: 55,
            testPowerPanel: 3,
            testCountFlats: 350,
            testPowerLine: 10,
            testLinePrice: 10.21,
            message: `при проверке на прибыльность ожидаемое значение false`
        },
        {
            testPrice:25,
            testPeriod: 70,
            testPowerStation:35,
            testPowerPanel:2,
            testCountFlats: 400,
            testPowerLine:70,
            testLinePrice: 11.8,
            message: `при проверке на прибыльность ожидаемое значение false`
        }
    ];

    negativeParams.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);
        calc.consumers = new Consumer(`testAddress`, param.testCountFlats);
        calc.powerLines = new PowerLine(`testLine1`, param.testPowerLine, param.testLinePrice);

        it(`${param.message}`, () => {
            expect(calc.isProfitable()).to.equal(false);
        });
    });
});