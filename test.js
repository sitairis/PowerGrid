describe("calculateVolumeOfProduction", function() {

    describe("подсчитывает производимую мощьность", function() {

        function makeTest(testPower, testPeriod) {
            let calc = new Source('testName', testPower);
            let expected = testPower * testPeriod * 24;//пертевод в часы
            it(`при подсчете производимой мощьности ${testPower} за период ${testPeriod} ожидаемое значение ${expected}`, function() {
                assert.equal(calc.calculateVolumeOfProduction(testPeriod*24), expected);//перевод в часы
            });
        }

        for (let testPower = 100, testPeriod = 30; testPower <= 200; testPower += 50, testPeriod += 5) {
            makeTest(testPower, testPeriod);
        }

    });

    /*it("при возведении в отрицательную степень результат NaN", function() {
        assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function() {
        assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
    });

    describe("любое число, кроме нуля, в степени 0 равно 1", function() {

        function makeTest(x) {
            it("при возведении " + x + " в степень 0 результат: 1", function() {
                assert.equal(pow(x, 0), 1);
            });
        }

        for (var x = -5; x <= 5; x += 2) {
            makeTest(x);
        }

    });

    it("ноль в нулевой степени даёт NaN", function() {
        assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
    });*/

});