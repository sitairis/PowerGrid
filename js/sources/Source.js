
import {isNumber, isString, isRightPeriod} from "../utils";
import {checkNameSource, checkPeriod, checkPower} from "../exceptions";

export default class Source {
    /**
     * Конструктор
     * @param name
     * @param power
     */
    constructor(name, power) {
        checkPower(power);
        checkNameSource(name);

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
        checkPeriod(hours);

        return this.power * hours;
    }

    get power() {
        checkPower(this._power);

        return this._power;
    }

    set power(power) {
        checkPower(power);

        this._power = Number.parseFloat(power);
    }

    get name() {
        checkNameSource(this._name);

        return this._name;
    }

    set name(name) {
        checkNameSource(name);

        this._name = name;
    }
}

