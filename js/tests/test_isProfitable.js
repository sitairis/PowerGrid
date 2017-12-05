
import PowerStation from "../sources/PowerStation";
import SolarPanel from "../sources/SolarPanel";
import Consumer from "../consumers/Consumer";
import PowerLine from "../sources/PowerLine";
import Grid from "../Grid";

describe("isProfitable", () => {

    let positiveParams = [
        {
            testPrice: 200,
            testPeriod: 45,
            testPowerStation: 55,
            testPowerPanel: 3,
            testCountFlats: 200,
            testPowerLine: 220,
            testLinePrice: 1.21,
            msgTypeOf:`возвращает ли функция boolean`,
            msgEqual: `при проверке на прибыльность ожидаемое значение true`
        },
        {
            testPrice:180,
            testPeriod: 36,
            testPowerStation:35,
            testPowerPanel:2,
            testCountFlats: 200,
            testPowerLine:220,
            testLinePrice: 1.1,
            msgTypeOf:`возвращает ли функция boolean`,
            msgEqual: `при проверке на прибыльность ожидаемое значение true`
        }
    ];

    positiveParams.forEach((param) => {
        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);
        calc.consumers = [new Consumer(`testAddress`, param.testCountFlats)];
        calc.powerLines = new PowerLine(`testLine1`, param.testPowerLine, param.testLinePrice);

        it(`${param.msgTypeOf}`, () => {
            assert.typeOf(calc.isProfitable(), `boolean`, `Значение boolean`);
        });

        it(`${param.msgEqual}`, () => {
            assert.equal(calc.isProfitable(), true);
        });
    });

    let negativeParams = [
        {
            testPrice: 100,
            testPeriod: 90,
            testPowerStation: 55,
            testPowerPanel: 3,
            testCountFlats: 350,
            testPowerLine: 10,
            testLinePrice: 10.21,
            message: `при проверке на прибыльность ожидаемое значение false`
        },
        {
            testPrice:35,
            testPeriod: 36,
            testPowerStation:35,
            testPowerPanel:2,
            testCountFlats: 400,
            testPowerLine:70,
            testLinePrice: 11.8,
            msgEqual: `при проверке на прибыльность ожидаемое значение false`
        }
    ];

    negativeParams.forEach((param) => {

        let calc = new Grid(param.testPrice, param.testPeriod);

        calc.powerStations = new PowerStation(`testPowerStation`, param.testPowerStation, `гидро`);
        calc.solarPanels = new SolarPanel(`testName`, param.testPowerPanel, `type1`);
        calc.consumers = [new Consumer(`testAddress`, param.testCountFlats)];
        calc.powerLines = new PowerLine(`testLine1`, param.testPowerLine, param.testLinePrice);

        it(`${param.message}`, () => {
            assert.equal(calc.isProfitable(), false);
        });
    });

});