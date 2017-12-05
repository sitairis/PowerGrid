import Source from "./Source";
import {isRightPowerOfStation, isRightTypeOfPowerStation} from "../utils";

export default class PowerStation extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param type
     */
    constructor(name, power, type) {
        super(name, power);

        if (!isRightPowerOfStation(power)){
            throw new Error(`Неправильный ввод`);
        }
        if (!isRightTypeOfPowerStation(type)){
            throw new Error(`Неправильный ввод`);
        }

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

    get type() {
        return this._type;
    }

    set type(value) {
        if (!isString(value)){
            throw new Error(`Неправильный ввод`);
        }
        this._type = value;
    }
}