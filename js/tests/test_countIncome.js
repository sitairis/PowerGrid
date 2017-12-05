import Grid from "../../Grid";
import SolarPanel from "../sources/SolarPanel";
import PowerStation from "../sources/PowerStation";

describe("countIncome", () => {

    let testPrice = 200, testPeriod = 72;

    let calc = new Grid(testPrice, testPeriod);

    calc.powerStations = new SolarPanel(`testName`, 3, `type1`);
    calc.solarPanels = new PowerStation(`testPowerStation`, 50, `гидро`);

    let expected = (3/2 + 50) * testPeriod * 24 * testPrice;

    it(`при подсчете дохода от производимой энергии солнечной батареи и электростанции за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.countIncome(), expected);
    });
});