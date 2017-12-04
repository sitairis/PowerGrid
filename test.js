describe("calculateVolumeOfProduction", () => {

    let testPower = 100, testPeriod = 30;
    let calc = new Source('testName', testPower);
    let expected = testPower * testPeriod * 24;//пертевод в часы

    it(`при подсчете производимой мощьности ${testPower} за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.calculateVolumeOfProduction(testPeriod * 24), expected);//перевод в часы
    });

    it(`При подсчете с отрицательным значением периода ${(-1) * testPeriod} ожидаем ошибку`, () => {
        assert.typeOf(calc.calculateVolumeOfProduction(testPeriod * 24 * (-1)), 'error', 'calc.calculateVolumeOfProduction(testPeriod*24 * (-1)) returns an error');
    });

    it(`При вводе вместо числа строки в значение периода 'string' ожидаем ошибку`, () => {
        assert.typeOf(calc.calculateVolumeOfProduction('string'), 'error', `calc.calculateVolumeOfProduction('string') returns an error`);
    });

    let testPeriod1 = 75.2;
    let expected1 = testPower * Math.round(testPeriod1) * 24;

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.calculateVolumeOfProduction(Math.round(testPeriod1) * 24), expected1);
    });

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.calculateVolumeOfProduction(Math.round(testPeriod1) * 24), expected1);
    });
});

describe("calculatePriceOfTransport", () => {

    let testPower = 100, testPeriod = 30, testPrice = 1.31;
    let calc = new PowerLine('testName', testPower, testPrice);
    let expected = testPower * testPeriod * 24 * testPrice;

    it(`при подсчете стоимости транспортировки электричества мощьностью ${testPower} за период ${testPeriod} по цене ${testPrice} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.calculatePriceOfTransport(testPeriod * 24), expected);
    });

    it(`При подсчете с отрицательным значением периода ${(-1) * testPeriod} ожидаем ошибку`, () => {
        assert.typeOf(calc.calculatePriceOfTransport(testPeriod * 24 * (-1)), 'error', 'calc.calculatePriceOfTransport(testPeriod*24 * (-1)) returns an error');
    });

    it(`При вводе вместо числа строки в значение периода 'string' ожидаем ошибку`, () => {
        assert.typeOf(calc.calculatePriceOfTransport('string'), 'error', `calc.calculatePriceOfTransport('string') returns an error`);
    });

    let testPeriod1 = 75.2;
    let expected1 = testPower * Math.round(testPeriod1) * 24 * testPrice;

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.calculatePriceOfTransport(Math.round(testPeriod1) * 24), expected1);
    });

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.calculatePriceOfTransport(Math.round(testPeriod1) * 24), expected1);
    });
});

describe("calculateVolumeOfConsumption", () => {

    let testCountOfFlats = 200, testPeriod = 720;
    let calc = new Consumer('testAddress', testCountOfFlats);
    let expected = testCountOfFlats * 5/24 *testPeriod;

    it(`при подсчете количества потребляемой энергии  ${testCountOfFlats} квартирами за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.calculateVolumeOfConsumption(testPeriod), expected);
    });

    it(`При подсчете с отрицательным значением периода ${(-1) * testPeriod} ожидаем ошибку`, () => {
        assert.typeOf(calc.calculateVolumeOfConsumption(testPeriod * (-1)), 'error', 'calc.calculateVolumeOfConsumption(testPeriod*24 * (-1)) returns an error');
    });

    it(`При вводе вместо числа строки в значение периода 'string' ожидаем ошибку`, () => {
        assert.typeOf(calc.calculateVolumeOfConsumption('string'), 'error', `calc.calculateVolumeOfConsumption('string') returns an error`);
    });

    let testPeriod1 = 750.2;
    let expected1 = testCountOfFlats * 5/24 * Math.round(testPeriod1);

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.calculateVolumeOfConsumption(Math.round(testPeriod1)), expected1);
    });

    it(`при подсчете с дробным периодом ${testPeriod1} ожидаемое значение ${expected1}`, () => {
        assert.equal(calc.calculateVolumeOfConsumption(Math.round(testPeriod1)), expected1);
    });
});

describe("calculateVolumeOfTotalProduction", () => {

    let testPrice = 200, testPeriod = 72;

    let calc = new Grid(testPrice, testPeriod);

    let testSolarPanel = new SolarPanel(`testName`, 3, `type1`);
    let testPowerStation = new PowerStation(`testPowerStation`, 50, `гидро`);

    calc.powerStations = testPowerStation;
    calc.solarPanels = testSolarPanel;


    let expected = (3/2 + 50) * testPeriod * 24;

    it(`при подсчете количества производимой энергии солнечной батар. и электростанцией за период ${testPeriod} ожидаемое значение ${expected}`, () => {
            assert.equal(calc.calculateVolumeOfTotalProduction(), expected);
        });
});

describe("calculateIncome", () => {

    let testPrice = 200, testPeriod = 72;

    let calc = new Grid(testPrice, testPeriod);

    let testSolarPanel = new SolarPanel(`testName`, 3, `type1`);
    let testPowerStation = new PowerStation(`testPowerStation`, 50, `гидро`);

    calc.powerStations = testPowerStation;
    calc.solarPanels = testSolarPanel;

    let expected = (3/2 + 50) * testPeriod * 24 * testPrice;

    it(`при подсчете дохода от производимой энергии солнечной батареи и электростанции за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.calculateIncome(), expected);
    });
});

describe("calculateCosts", () => {

    let testPrice = 200, testPeriod = 72;

    let calc = new Grid(testPrice, testPeriod);


    let testPowerLine = new PowerLine(`testLine1`, 220, 1.1);
    let testConsumer = new Consumer(`testAddress`, 200);


    calc.consumers = [testConsumer];
    calc.powerLines = testPowerLine;

    let expected = testPeriod * 220 * 24 * 1.1 +  testPeriod * 200 * 5/24;

    it(`при подсчете затрат на транспортировку и потребление энергии за период ${testPeriod} ожидаемое значение ${expected}`, () => {
        assert.equal(calc.calculateCosts(), expected);
    });
});