
import {isNumber, isString, isRightPeriod} from "../../utils";

export default class Source {
    /**
     * Конструктор
     * @param name
     * @param power
     */
    constructor(name, power,) {
        if (!name || !power){
            throw new Error(`Неправильный ввод`);
        }
        if (!isString(name) || !isNumber(power)){
            throw new Error(`Неправильный ввод`);
        }
        if (power < 0){
           throw new Error(`Мощьность меньше нуля`);
        }

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
        if(!isRightPeriod(hours)){
            throw new Error(`Неверно введен период`);
        }
        if( hours < 0){
            throw new Error(`Период отрицательное число`);
        }
        return this.power * hours;
    }

    get power() {
        return this._power;
    }

    set power(power) {
        if(!isNumber(power)){
            throw new Error(`Неправильный ввод`);
        }
        this._power = Number.parseFloat(power);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if(!isString(name)){
            throw new Error(`Неправильный ввод`);
        }
        this._name = name;
    }
}

