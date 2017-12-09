let Source = require('./Source');
let ExCheck = require('../exceptions');

class PowerLine extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param price
     */
    constructor(name, power, price) {
        super(name, power);

        ExCheck.checkPrice(price);

        this._priceKVt = Number.parseFloat(price);
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString() {
        return `${super.toString()}
Цена (руб за 1 КВт*ч): ${this.priceKVt}`;
    }

    /**
     * Подсчет затрат на передачу энергии по ЛЭП
     * @param hours
     * @returns {number}
     */
    countTransportPrice(hours) {
        ExCheck.checkPeriod(hours);

        return Math.round(super.countProductionVolume(hours) * this.priceKVt);
    }

    get priceKVt() {
        ExCheck.checkPrice(this._priceKVt);

        return this._priceKVt;
    }

    set priceKVt(value) {
        ExCheck.checkPrice(value);

        this._priceKVt = Number.parseFloat(value);
    }

    print(){
        console.log(`${this.toString()}`);
    }
}


module.exports = PowerLine;