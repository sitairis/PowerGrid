import PowerLine from "../sources/PowerLine";

describe("countTransportPrice", () => {

    let equalParams = [
        {
            testPeriod: 900,
            testPowerLine: 10,
            testLinePrice: 10.21,
            message: `при подсчете с периодом ${this.testPeriod} ожидаемое значение`
        },
        {
            testPeriod: 36,
            testPowerLine:70,
            testLinePrice: 11.8,
            message: `при подсчете с периодом ${this.testPeriod} ожидаемое значение`
        }
    ];

    equalParams.forEach((param) => {
        let calc = new PowerLine('testName', param.testPowerLine, param.testLinePrice);

        let expected = param.testPowerLine * param.testLinePrice * Math.round(param.testPeriod);

        it(`${param.message} ${expected}`, () => {
            assert.equal(calc.countTransportPrice(param.testPeriod), expected);
        });
    });

    let typeOfParams = [
        {
            testPeriod: -900,
            testPowerLine: 10,
            testLinePrice: 10.21,
            message: `при подсчете с периодом ${this.testPeriod} ожидаемое ошибка`
        },
        {
            testPeriod: 'string',
            testPowerLine:70,
            testLinePrice: 11.8,
            message: `при подсчете с периодом ${this.testPeriod} ожидаемое ошибка`
        }
    ];

    typeOfParams.forEach((param) => {

        let calc = new PowerLine('testName', param.testPowerLine, param.testLinePrice);

        it(`${param.message}`, () => {
            assert.typeOf(calc.countTransportPrice(param.testPeriod), 'error', 'calc.countProductionVolume returns an error');
        });
    });
});