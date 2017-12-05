import PowerLine from "../sources/PowerLine";

describe("countTransportPrice", () => {

    let testPower = 100, testPeriod = 30, testPrice = 1.31;
    let calc = new PowerLine('testName', testPower, testPrice);
    let expected = testPower * testPeriod * 24 * testPrice;

    it(`при подсчете стоимости транспортировки электричества мощьностью ${testPower} за период ${testPeriod} по цене ${testPrice} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.countTransportPrice(testPeriod * 24), expected);
    });

    it(`При подсчете с отрицательным значением периода ${(-1) * testPeriod} ожидаем ошибку`, () => {
        assert.typeOf(calc.countTransportPrice(testPeriod * 24 * (-1)), 'error', 'calc.countTransportPrice(testPeriod*24 * (-1)) returns an error');
    });

    it(`При вводе вместо числа строки в значение периода 'string' ожидаем ошибку`, () => {
        assert.typeOf(calc.countTransportPrice('string'), 'error', `calc.calculatePriceOfTransport('string') returns an error`);
    });

    let testPeriod1 = 75.2;
    let expected1 = testPower * Math.round(testPeriod1) * 24 * testPrice;

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.countTransportPrice(Math.round(testPeriod1) * 24), expected1);
    });

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.countTransportPrice(Math.round(testPeriod1) * 24), expected1);
    });
});