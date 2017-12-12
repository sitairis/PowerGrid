let expect = require("chai").expect;
let Grid = require('../Grid');
let SolarPanel = require('../sources/SolarPanel');
let PowerStation = require('../sources/PowerStation');

describe("countIncome", () => {
    let params = [
        {
            testPrice: 200,
            testPeriod: 50,
            testPowerStation: 55,
            testPowerPanel: 3,
            expected:13560000,
            message: `при подсчете дохода от производимой энергии солнечной батареи и электростанции ожидаемое значение`
        },
        {
            testPrice:35,
            testPeriod: 36,
            testPowerStation:35,
            testPowerPanel:2,
            expected: 1088640,
            message: `при подсчете дохода от производимой энергии солнечной батареи и электростанции ожидаемое значение`
        }
    ];

    params.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);

        it(`${param.message} ${param.expected}`, () => {
            expect(calc.countIncome()).to.equal(param.expected);
        });
    });

});