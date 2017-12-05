import Source from "../sources/Source";

describe("countProductionVolume", () => {

    let equalParams = [
        {
            testPower: 100,
            testPeriod: 900,
            message: `при подсчете с периодом ${this.testPeriod} ожидаемое значение`
        },
        {
            testPeriod: 360.7,
            testPower: 55,
            message: `при подсчете с периодом ${this.testPeriod} ожидаемое значение`
        }
    ];

    equalParams.forEach((param) => {

        let calc = new Source('testName', param.testPower);

        let expected = param.testPower * Math.round(param.testPeriod);

        it(`${param.message} ${expected}`, () => {
            assert.equal(calc.countProductionVolume(param.testPeriod), expected);
        });
    });

    let typeOfParams = [
        {
            testPower: 'string',
            testPeriod: 900,
            message: `при подсчете с периодом ${this.testPeriod} ожидается ошибку`
        },
        {
            testPeriod: -360,
            testPower: 55,
            message: `при подсчете с периодом ${this.testPeriod} ожидается ошибку`
        }
    ];

    typeOfParams.forEach((param) => {

        let calc = new Source('testName', param.testPower);

        it(`${param.message}`, () => {
            assert.typeOf(calc.countProductionVolume(param.testPeriod), 'error', 'calc.countProductionVolume returns an error');
        });
    });
});
