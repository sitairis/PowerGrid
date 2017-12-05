import Consumer from "../consumers/Consumer";

describe("countConsumptionVolume", () => {

    let testCountOfFlats = 200, testPeriod = 720;
    let calc = new Consumer('testAddress', testCountOfFlats);
    let expected = testCountOfFlats * 5/24 *testPeriod;

    it(`при подсчете количества потребляемой энергии  ${testCountOfFlats} квартирами за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.countConsumptionVolume(testPeriod), expected);
    });

    it(`При подсчете с отрицательным значением периода ${(-1) * testPeriod} ожидаем ошибку`, () => {
        assert.typeOf(calc.countConsumptionVolume(testPeriod * (-1)), 'error', 'calc.countConsumptionVolume(testPeriod*24 * (-1)) returns an error');
    });

    it(`При вводе вместо числа строки в значение периода 'string' ожидаем ошибку`, () => {
        assert.typeOf(calc.countConsumptionVolume('string'), 'error', `calc.calculateVolumeOfConsumption('string') returns an error`);
    });

    let testPeriod1 = 750.2;
    let expected1 = testCountOfFlats * 5/24 * Math.round(testPeriod1);

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.countConsumptionVolume(Math.round(testPeriod1)), expected1);
    });

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.countConsumptionVolume(Math.round(testPeriod1)), expected1);
    });
});