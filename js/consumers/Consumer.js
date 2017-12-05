import {isRightCountOfFlats, isRightPeriod, isString} from "../../utils";

export default class Consumer{
    /**
     * Конструктор
     * @param address
     * @param countOfFlats
     */
    constructor(address, countOfFlats) {
        if(!isString(address) || !isRightCountOfFlats(countOfFlats)){
            throw new Error(`Неправильный ввод`);
        }
        this._address = address;
        this._countOfFlats = countOfFlats;
        this._DAILY_CONSUMPTION = 4;
        this._NIGHT_CONSUMPTION = 1;
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString() {
        return `Адрес дома : ${this.address}
Количество квартир : ${this.countOfFlats}
Потребление днем (КВт): ${this.DAILY_CONSUMPTION}
Потребление ночью (КВт): ${this.NIGHT_CONSUMPTION}`;
    }

    /**
     * Подсчет объема потребления дома
     * за данный промежуток времени
     * @param hours
     * @returns {number}
     */
    countConsumptionVolume(hours) {
        if(!isRightPeriod(hours)){
            throw new Error(`Неверно введен период`);
        }
        if( hours < 0){
            throw new Error(`Период отрицательное число`);
        }

        return this.countOfFlats * (this.DAILY_CONSUMPTION/24 + this.NIGHT_CONSUMPTION/24) * hours;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        if(!isString(value)){
            throw new Error(`Неправильный ввод`);
        }
        this._address = value;
    }

    get countOfFlats() {
        return this._countOfFlats;
    }

    set countOfFlats(value) {
        if(!isRightCountOfFlats(value)){
            throw new Error(`Неправильный ввод`);
        }
        this._countOfFlats = value;
    }


    get DAILY_CONSUMPTION() {
        return this._DAILY_CONSUMPTION;
    }

    get NIGHT_CONSUMPTION() {
        return this._NIGHT_CONSUMPTION;
    }
}