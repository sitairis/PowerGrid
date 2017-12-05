import PowerLine from "../sources/PowerLine";
import Consumer from "../consumers/Consumer";
import Grid from "../../Grid";

describe("countCosts", () => {

    let params = [
        {
            testPrice: 200,
            testPeriod: 900,
            testCountFlats: 350,
            testPowerLine: 10,
            testLinePrice: 10.21,
            message: `при подсчете затрат на транспортировку и потребление энергии за период ${this.testPeriod} ожидаемое значение`
        },
        {
            testPrice:35,
            testPeriod: 36,
            testCountFlats: 400,
            testPowerLine:70,
            testLinePrice: 11.8,
            message: `при подсчете затрат на транспортировку и потребление энергии за период ${this.testPeriod} ожидаемое значение`
        }
    ];

    params.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerLines = new PowerLine(`testLine1`, param.testPowerLine, param.testLinePrice);
        calc.consumers = [new Consumer(`testAddress`, param.testCountFlats)];

        let expected = param.testPeriod * (param.testPowerLine * param.testLinePrice +  param.testCountFlats * 5/24 * param.testPrice) ;

        it(`${param.message} ${expected}`, () => {
            assert.equal(calc.countCosts(), expected);
        });
    });
});
