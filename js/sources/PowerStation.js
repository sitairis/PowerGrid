let Source = require('./Source');
let ExCheck = require('../exceptions');

class PowerStation extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param type
     */
    constructor(name, power, type) {
        super(name, power);
        ExCheck.checkStationPower(power);
        ExCheck.checkStationType(type);

        this._type = type;
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString(){
        return `${super.toString()}
Тип электростации: ${this.type}`;
    }

    /**
     * Вывод информации о электоростанции
     */
    print() {
        console.log(`${this.toString()}`);
    }

    get type() {
        ExCheck.checkStationType(this._type);

        return this._type;
    }

    set type(value) {
        ExCheck.checkStationType(type);

        this._type = value;
    }


    get power() {
        ExCheck.checkPowerStations(this._power);
        return this._power;
    }

    set power(value) {
        ExCheck.checkPowerStations(value);
        this._power = value;
    }
}

module.exports = PowerStation;