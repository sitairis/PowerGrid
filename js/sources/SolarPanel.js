
import Source from "./Source";
import {isRightPowerOfSolarPanel, isString} from "../utils";
import {checkPanelType, checkPeriod, checkStationType} from "../exceptions";

export default class SolarPanel extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param type
     */
    constructor(name, power, type) {
        super(name, power);
        checkStationType(type);
        this._type = type;
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString(){
        return `${super.toString()}
Тип солнечной панели: ${this.type}`;
    }

    print() {
        console.log(`${this.toString()}`);
    }
    /**
     * Подсчет производимой мощности солнечной батареей
     * за данный промежуток времени
     * @param hours
     * @returns {number}
     */
    countProductionVolume(hours) {
        checkPeriod(hours);
        let workingHours = hours/2;
        return super.countProductionVolume(workingHours);
    }

    get type() {
        checkPanelType(this._type);
        return this._type;
    }

    set type(value) {
        checkPanelType(value);
        this._type = value;
    }
}