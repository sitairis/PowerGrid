
import Source from "./Source";
import {isRightPeriod, isNumber} from "../utils";

export default class PowerLine extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param price
     */
    constructor(name, power, price) {
        super(name, power);

        if (!isNumber(price)) {
            throw new Error(`Неворный ввод`);
        }

        this._priceKVt = Number.parseFloat(price);
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString(){
        return `${super.toString()}
Цена (руб за 1 КВт*ч): ${this.priceKVt}`;
    }

    /**
     * Подсчет затрат на передачу энергии по ЛЭП
     * @param hours
     * @returns {number}
     */
    countTransportPrice(hours){
        if( hours < 0){
            throw new Error(`Период отрицательное число`);
        }
        if(!isRightPeriod(hours)){
            throw new Error(`Неверно введен период`);
        }
        return super.countProductionVolume(hours) * this.priceKVt;
    }

    get priceKVt() {
        return this._priceKVt;
    }

    set priceKVt(value) {
        if (!isNumber(value)){
            throw new Error(`Неворный ввод`);
        }
        this._priceKVt = Number.parseFloat(value);
    }
}