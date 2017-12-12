let expect = require("chai").expect;
let Grid = require('../Grid');
let SolarPanel = require('../sources/SolarPanel');
let PowerStation = require('../sources/PowerStation');

describe("countAllProductionVolume", () => {

    let equalParams = [
        {
            testPrice:200,
            testPeriod: 72,
            testPowerStation:50,
            testPowerPanel:3,
            expected : 88992,
            message:`при подсчете количества производимой энергии солнечной батар. 
            и электростанцией за период ${this.testPeriod} ожидаемое значение`
        },
        {
            testPrice:180,
            testPeriod: 36,
            testPowerStation:35,
            testPowerPanel:2,
            expected : 31104,
            message:`при подсчете количества производимой энергии солнечной батар. 
            и электростанцией за период ${this.testPeriod} ожидаемое значение`
        }
    ];


    equalParams.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);

        it(`${param.message} ${param.expected}`, () => {
           expect(calc.countAllProductionVolume()).to.equal(param.expected);
        });
    });
});


