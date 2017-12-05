import Grid from "../Grid";
import SolarPanel from "../sources/SolarPanel";
import PowerStation from "../sources/PowerStation";

describe("countIncome", () => {
    let params = [
        {
            testPrice: 200,
            testPeriod: 900,
            testPowerStation: 55,
            testPowerPanel: 3,
            message: `при подсчете дохода от производимой энергии солнечной батареи и электростанции за период ${this.testPeriod} ожидаемое значение`
        },
        {
            testPrice:35,
            testPeriod: 36,
            testPowerStation:35,
            testPowerPanel:2,
            message: `при подсчете дохода от производимой энергии солнечной батареи и электростанции за период ${this.testPeriod} ожидаемое значение`
        }
    ];

    params.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);

        let expected = (param.testPowerPanel/2 + param.testPowerStation) * param.testPeriod * param.testPrice;

        it(`${param.message} ${expected}`, () => {
            assert.equal(calc.countIncome(), expected);
        });
    });

});