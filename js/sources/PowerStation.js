import Source from "./Source";
import {isRightPowerOfStation, isRightTypeOfPowerStation} from "../utils";
import {checkStationType} from "../exceptions";

export default class PowerStation extends Source{
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
Тип электростации: ${this.type}`;
    }

    /**
     * Вывод информации о электоростанции
     */
    print() {
        console.log(`${this.toString()}`);
    }

    get type() {
        checkStationType(type);
        return this._type;
    }

    set type(value) {
        checkStationType(type);
        this._type = value;
    }
}