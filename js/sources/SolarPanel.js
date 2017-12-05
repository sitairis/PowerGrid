
import Source from "./Source";
import {isRightPowerOfSolarPanel, isString} from "../../utils";

export default class SolarPanel extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param type
     */
    constructor(name, power, type) {
        super(name, power);

        if (!isRightPowerOfSolarPanel(power)){
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
Тип солнечной панели: ${this.type}`;
    }

    /**
     * Подсчет производимой мощности солнечной батареей
     * за данный промежуток времени
     * @param hours
     * @returns {number}
     */
    countProductionVolume(hours) {
        let workingHours = hours/2;
        return super.countProductionVolume(workingHours);
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if (!isString(value)){
            throw new Error(`Неправильный ввод типа`);
        }
        this._type = value;
    }
}