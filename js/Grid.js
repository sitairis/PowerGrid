let utils = require('./utils');
let ExCheck = require('./exceptions');

class Grid {
    /**
     * Конструктор
     * @param price
     * @param period
     */
    constructor(price, period) {
        ExCheck.checkPeriod(period);
        ExCheck.checkPrice(price);

        this._marketPrice = price;
        this._period = utils.toHour(Math.round(period));
        this._powerStations = [];
        this._solarPanels = [];
        this._powerLines = [];
        this._consumers = [];
        this._exportPower = 1;
        this._importPower = 1;
    }

    /**
     * Подсчет общей мощности производимой и затраченной энергии за
     * данный период времени и подсчет количества энергии на экспорт и импорт
     * @returns {string}
     */
    getPowerReport() {

        let consumptionVolume = this.consumers.reduce((totalSum, currentElement) => totalSum + currentElement.countConsumptionVolume(this.period), 0);

        let produce = this.countAllProductionVolume();

        (consumptionVolume > produce) ? this.importPower = consumptionVolume - produce : this.exportPower = produce - consumptionVolume;

        return `Количество произведенной энергии (КВт): ${produce.toFixed(2)}
Количество потребленной энергии (КВт): ${consumptionVolume}
Энергия на экспорт (КВт): ${this.exportPower}
Энергия на импорт (КВт): ${this.importPower}`
    }

    /**
     * Подсчет общего количества произведенной энергии
     * @returns {*}
     */
    countAllProductionVolume() {

        let volumePowerStations = this.powerStations.reduce((totalSum, currentElement) => totalSum + currentElement.countProductionVolume(this.period), 0);
        let volumeSolarPanels = this.solarPanels.reduce((totalSum, currentElement) => totalSum + currentElement.countProductionVolume(this.period), 0);

        return volumePowerStations + volumeSolarPanels;
    }

    /**
     * Подсчет дохода от произведенной энергии
     * @returns {number}
     */
    countIncome() {

        let all = this.countAllProductionVolume();

        return all * this.marketPrice;
    }

    /**
     * Подсчет затрат энергии на транспортировку и потребление
     * @returns {*}
     */
    countCosts() {

        let costsTr = this.powerLines.reduce((totalSum, currentElement) => totalSum + currentElement.countTransportPrice(this.period),0);

        let costsCons = this.consumers.reduce((totalSum, currentElement) => totalSum + currentElement.countConsumptionVolume(this.period), 0) * this.marketPrice;

        return costsCons + costsTr;
    }

    /**
     * Есть ли доход за данный период времени
     * @returns {boolean}
     */
    isProfitable() {
        return this.countIncome() > this.countCosts();
    }

    /**
     * Отчет о состоянии сети
     * @returns {string}
     */
    getReport() {
        return `Информация о сети:
${this.getPowerReport()}
Доход : ${this.countIncome()}
Расход : ${this.countCosts()}
Выгодно : ${this.isProfitable()}`
    }

    /**
     * Вывод отчета по сети
     */
    print() {
        console.log(`${this.getReport()}`);
    }

    get powerLines() {
        ExCheck.checkPowerLines(this._powerLines);

        return this._powerLines;
    }

    set powerLines(value) {
        ExCheck.checkPowerLine(value);

        this._powerLines.push(value);
    }

    get period() {
        ExCheck.checkPeriod(this._period);

        return this._period;
    }

    set period(value) {
        ExCheck.checkPeriod(value);

        this._period = utils.toHour(value);
    }

    get powerStations() {
        ExCheck.checkPowerStations(this._powerStations);

        return this._powerStations;
    }

    set powerStations(value) {
        ExCheck.checkPowerStation(value);

        this._powerStations.push(value);
    }

    get solarPanels() {
        ExCheck.checkSolarPanels(this._solarPanels);

        return this._solarPanels;
    }

    set solarPanels(value) {
        ExCheck.checkSolarPanel(value);

        this._solarPanels.push(value);
    }

    get consumers() {
        ExCheck.checkConsumers(this._consumers);

        return this._consumers;
    }

    set consumers(value) {
        ExCheck.checkConsumer(value);

        this._consumers.push(value);
    }

    get marketPrice() {
        ExCheck.checkPrice(this._marketPrice);

        return this._marketPrice;
    }

    set marketPrice(value) {
        ExCheck.checkPrice(value);

        this._marketPrice = value;
    }

    get exportPower() {
        ExCheck.checkPower(this._exportPower);

        return this._exportPower;
    }

    set exportPower(value) {
        ExCheck.checkPower(value);

        this._exportPower = value;
    }

    get importPower() {
        ExCheck.checkPower(this._importPower);

        return this._importPower;
    }

    set importPower(value) {
        ExCheck.checkPower(value);

        this._importPower = value;
    }
}

module.exports = Grid;