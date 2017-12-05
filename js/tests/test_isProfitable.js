
import PowerStation from "../sources/PowerStation";
import SolarPanel from "../sources/SolarPanel";
import Consumer from "../consumers/Consumer";
import PowerLine from "../sources/PowerLine";
import Grid from "../../Grid";

describe("isProfitable", () => {

    let testPrice = 200, testPeriod = 72;

    let calc = new Grid(testPrice, testPeriod);


    calc.powerStations = new PowerStation(`testPowerStation`, 50, `гидро`);
    calc.solarPanels = new SolarPanel(`testName`, 3, `type1`);
    calc.consumers = [new Consumer(`testAddress`, 200)];
    calc.powerLines = new PowerLine(`testLine1`, 220, 1.1);

    let costs = testPeriod * 220 * 24 * 1.1 +  testPeriod * 200 * 5/24;
    let incomes = (3/2 + 50) * testPeriod * 24 * testPrice;
    let expected = true;

    if (incomes - costs < 0) {
        expected = false
    }
    it(`возвращает ли функция boolean`, () => {
        assert.typeOf(calc.isProfitable(), `boolean`, `Значение boolean`);
    });

    it(`при проверке на прибыльность при значении доходов ${incomes} и расходов ${costs} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.isProfitable(), expected);
    });

});