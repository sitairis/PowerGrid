
import Source from "./Source";
import {checkPeriod, checkPrice} from "../exceptions";

export default class PowerLine extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param price
     */
    constructor(name, power, price) {
        super(name, power);

        checkPrice(price);

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
        checkPeriod(hours);

        return super.countProductionVolume(hours) * this.priceKVt;
    }

    get priceKVt() {
        checkPrice(this._priceKVt);

        return this._priceKVt;
    }

    set priceKVt(value) {
        checkPrice(value);

        this._priceKVt = Number.parseFloat(value);
    }

    print(){
        console.log(`${this.toString()}`);
    }
}