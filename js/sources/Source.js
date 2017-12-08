let ExCheck = require('../exceptions');

class Source {
    /**
     * Конструктор
     * @param name
     * @param power
     */
    constructor(name, power) {
        ExCheck.checkPower(power);
        ExCheck.checkNameSource(name);

        this._name = name;
        this._power = Number.parseFloat(power);
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString() {
        return `Название: ${this.name}
Мощность (КВт*ч): ${this.power}`;
    }

    /**
     * Подсчет производимой мощности
     * @param hours
     * @returns {number}
     */
    countProductionVolume(hours) {
        ExCheck.checkPeriod(hours);

        return this.power * hours;
    }

    get power() {
        ExCheck.checkPower(this._power);

        return this._power;
    }

    set power(power) {
        ExCheck.checkPower(power);

        this._power = Number.parseFloat(power);
    }

    get name() {
        ExCheck.checkNameSource(this._name);

        return this._name;
    }

    set name(name) {
        ExCheck.checkNameSource(name);

        this._name = name;
    }
}

console.log('OKAY! Source.js=)');
module.exports = Source;


