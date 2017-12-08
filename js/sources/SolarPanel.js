let Source = require('./Source');
let ExCheck = require('../exceptions');

class SolarPanel extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param type
     */
    constructor(name, power, type) {
        super(name, power);
        ExCheck.checkPowerPanel(power);
        ExCheck.checkPanelType(type);

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
        ExCheck.checkPeriod(hours);

        let workingHours = hours/2;

        return super.countProductionVolume(workingHours);
    }

    get type() {
        ExCheck.checkPanelType(this._type);

        return this._type;
    }

    set type(value) {
        ExCheck.checkPanelType(value);

        this._type = value;
    }
}

console.log('OKAY! SolarPanel.js=)');
module.exports = SolarPanel;