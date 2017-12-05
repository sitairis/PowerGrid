import {isRightCountOfFlats, isRightPeriod, isString} from "../utils";

export default class Consumer{
    /**
     * Конструктор
     * @param address
     * @param countFlats
     */
    constructor(address, countFlats) {
        checkAddress(address);
        checkCountFlats(countFlats);

        this._address = address;
        this._countFlats = countFlats;
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

    print(){
        console.log(`${this.toString()}`);
    }

    /**
     * Подсчет объема потребления дома
     * за данный промежуток времени
     * @param hours
     * @returns {number}
     */
    countConsumptionVolume(hours) {
        checkPeriod(hours);

        return this.countOfFlats * (this.DAILY_CONSUMPTION/24 + this.NIGHT_CONSUMPTION/24) * hours;
    }

    get address() {
        checkAddress(this._address);
        return this._address;
    }

    set address(value) {
        checkAddress(value);
        this._address = value;
    }

    get countOfFlats() {
        checkCountFlats(this._countFlats);
        return this._countFlats;
    }

    set countOfFlats(value) {
        checkCountFlats(value);
        this._countFlats = value;
    }


    get DAILY_CONSUMPTION() {
        checkDAILY_CONSUMPTION(this._DAILY_CONSUMPTION);
        return this._DAILY_CONSUMPTION;
    }

    get NIGHT_CONSUMPTION() {
        checkNIGHT_CONSUMPTION(this._NIGHT_CONSUMPTION);
        return this._NIGHT_CONSUMPTION;
    }
}