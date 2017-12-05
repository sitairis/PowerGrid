import Grid from "../Grid";
import SolarPanel from "../sources/SolarPanel";
import PowerStation from "../sources/PowerStation";

describe("countAllProductionVolume", () => {

    let equalParams = [
        {
            testPrice:200,
            testPeriod: 72,
            testPowerStation:50,
            testPowerPanel:3,
            message:`при подсчете количества производимой энергии солнечной батар. 
            и электростанцией за период ${this.testPeriod} ожидаемое значение`,
            expected: true
        },
        {
            testPrice:180,
            testPeriod: 36,
            testPowerStation:35,
            testPowerPanel:2,
            message:`при подсчете количества производимой энергии солнечной батар. 
            и электростанцией за период ${this.testPeriod} ожидаемое значение`,
            expected: true
        }
    ];


    equalParams.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);

        it(`${param.message} ${expected}`, () => {
            assert.equal(calc.countAllProductionVolume(), param.expected);
        });
    });

});


