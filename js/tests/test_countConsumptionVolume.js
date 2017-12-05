import Consumer from "../consumers/Consumer";

describe("countConsumptionVolume", () => {

    let equalParams = [
        {
            testPrice: 100,
            testPeriod: 900,
            testPowerStation: 55,
            testPowerPanel: 3,
            testCountFlats: 350,
            testPowerLine: 10,
            testLinePrice: 10.21,
            message: `при подсчете с дробным периодом ${this.testPeriod} ожидаемое значение `
        },
        {
            testPrice: 35,
            testPeriod: 360.7,
            testPowerStation: 35,
            testPowerPanel: 2,
            testCountFlats: 400,
            testPowerLine: 70,
            testLinePrice: 11.8,
            message: `при подсчете с дробным периодом ${this.testPeriod} ожидаемое значение `
        }
    ];

    equalParams.forEach((param) => {

        let calc = new Consumer('testAddress', param.testCountFlats);

        let expected = param.testCountFlats * 5/24 * param.testPeriod;

        it(`${param.message} ${expected}`, () => {
            assert.equal(calc.countConsumptionVolume(param.testPeriod), expected);
        });
    });

    let typeOfParams = [
        {
            testPeriod: 'string',
            testCountFlats: 350,
            message: ``
        },
        {
            testPeriod: -900,
            testCountFlats: 400,
            message: ``
        }
    ];

    typeOfParams.forEach((param) => {
        let calc = new Consumer('testAddress', param.testCountFlats);

        it(`${param.message}`, () => {
            assert.typeOf(calc.countConsumptionVolume(param.testPeriod), 'error', 'calc.countConsumptionVolume returns an error');
        });
    });
});