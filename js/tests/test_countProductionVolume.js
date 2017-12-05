import Source from "../sources/Source";

describe("countProductionVolume", () => {

    let testPower = 100, testPeriod = 30;
    let calc = new Source('testName', testPower);
    let expected = testPower * testPeriod * 24;//пертевод в часы

    it(`при подсчете производимой мощьности ${testPower} за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.countProductionVolume(testPeriod * 24), expected);//перевод в часы
    });

    it(`При подсчете с отрицательным значением периода ${(-1) * testPeriod} ожидаем ошибку`, () => {
        assert.typeOf(calc.countProductionVolume(testPeriod * 24 * (-1)), 'error', 'calc.countProductionVolume(testPeriod*24 * (-1)) returns an error');
    });

    it(`При вводе вместо числа строки в значение периода 'string' ожидаем ошибку`, () => {
        assert.typeOf(calc.countProductionVolume('string'), 'error', `calc.calculateVolumeOfProduction('string') returns an error`);
    });

    let testPeriod1 = 75.2;
    let expected1 = testPower * Math.round(testPeriod1) * 24;

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.countProductionVolume(Math.round(testPeriod1) * 24), expected1);
    });

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.countProductionVolume(Math.round(testPeriod1) * 24), expected1);
    });
});
