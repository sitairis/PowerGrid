
import {isRightPeriod, toHour, isNumber} from "./utils";
import {
    checkConsumer,
    checkConsumers,
    checkPeriod, checkPower, checkPowerLine, checkPowerLines, checkPowerStation, checkPowerStations,
    checkPrice, checkSolarPanel, checkSolarPanels
} from "./exceptions";

export default class Grid {
    /**
     * Конструктор
     * @param price
     * @param period
     */
    constructor(price, period) {
        checkPeriod(period);
        checkPrice(price);
        this._marketPrice = price;
        this._period = toHour(Math.round(period));
        this._powerStations = [];
        this._solarPanels = [];
        this._powerLines = [];
        this._consumers = [];
        this._exportPower = 0;
        this._importPower = 0;
    }

    /**
     * Подсчет общей мощности производимой и затраченной энергии за
     * данный период времени и подсчет количества энергии на экспорт и импорт
     * @returns {string}
     */
    getPowerReport() {

        let volumeOfConsumption = this.consumers.reduce((totalSum, currentElement) => totalSum + currentElement.countConsumptionVolume(this.period), 0);

        let produce = this.countAllProductionVolume();

         (volumeOfConsumption >= produce) ? this.importPower = volumeOfConsumption - produce:this.exportPower = produce - volumeOfConsumption;

        return `Количество произведенной энергии (КВт): ${produce.toFixed(2)}
Количество потребленной энергии (КВт): ${volumeOfConsumption}
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
        return !!(this.countIncome() + this.countCosts());
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

    print() {
        console.log(`${this.getReport()}`);
    }
    get powerLines() {
        checkPowerLines(this._powerLines);
        return this._powerLines;
    }

    set powerLines(value) {
        checkPowerLine(value);
        this._powerLines.push(value);
    }

    get period() {
        checkPeriod(this._period);
        return this._period;
    }

    set period(value) {
        checkPeriod(value);
        this._period = toHour(value);
    }

    get powerStations() {
        checkPowerStations(this._powerStations);
        return this._powerStations;
    }

    set powerStations(value) {
        checkPowerStation(value);
        this._powerStations.push(value);
    }

    get solarPanels() {
        checkSolarPanels(this._solarPanels);
        return this._solarPanels;
    }

    set solarPanels(value) {
        checkSolarPanel(value);
        this._solarPanels.push(value);
    }

    get consumers() {
        checkConsumers(this._consumers);
        return this._consumers;
    }

    set consumers(value) {
        checkConsumer(value);
        this._consumers.push(value);
    }

    get marketPrice() {
        checkPrice(this._marketPrice);
        return this._marketPrice;
    }

    set marketPrice(value) {
        checkPrice(value);
        this._marketPrice = value;
    }

    get exportPower() {
        checkPower(this._exportPower);
        return this._exportPower;
    }

    set exportPower(value) {
        checkPower(value);
        this._exportPower = value;
    }

    get importPower() {
        checkPower(this._importPower);
        return this._importPower;
    }

    set importPower(value) {
        checkPower(value);
        this._importPower = value;
    }
}