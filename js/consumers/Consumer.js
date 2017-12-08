let ExCheck = require('../exceptions');

class Consumer {
    /**
     * Конструктор
     * @param address
     * @param countFlats
     */
    constructor(address, countFlats) {
        ExCheck.checkAddress(address);
        ExCheck.checkCountFlats(countFlats);

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
        ExCheck.checkPeriod(hours);

        return this.countOfFlats * (this.DAILY_CONSUMPTION/24 + this.NIGHT_CONSUMPTION/24) * hours;
    }

    get address() {
        ExCheck.checkAddress(this._address);

        return this._address;
    }

    set address(value) {
        ExCheck.checkAddress(value);

        this._address = value;
    }

    get countOfFlats() {
        ExCheck.checkCountFlats(this._countFlats);

        return this._countFlats;
    }

    set countOfFlats(value) {
        ExCheck.checkCountFlats(value);

        this._countFlats = value;
    }


    get DAILY_CONSUMPTION() {
        ExCheck.checkDAILY_CONSUMPTION(this._DAILY_CONSUMPTION);

        return this._DAILY_CONSUMPTION;
    }

    get NIGHT_CONSUMPTION() {
        ExCheck.checkNIGHT_CONSUMPTION(this._NIGHT_CONSUMPTION);

        return this._NIGHT_CONSUMPTION;
    }
}

module.exports = Consumer;
