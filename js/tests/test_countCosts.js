import PowerLine from "../sources/PowerLine";
import Consumer from "../consumers/Consumer";
import Grid from "../../Grid";

describe("countCosts", () => {

    let testPrice = 200, testPeriod = 72;

    let calc = new Grid(testPrice, testPeriod);


    let testPowerLine = new PowerLine(`testLine1`, 220, 1.1);
    let testConsumer = new Consumer(`testAddress`, 200);


    calc.consumers = [testConsumer];
    calc.powerLines = testPowerLine;

    let expected = testPeriod * 220 * 1.1 * 24 +  testPeriod * 24 * 200 * 5/24 * testPrice ;

    it(`при подсчете затрат на транспортировку и потребление энергии за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.countCosts(), expected);
    });
});
