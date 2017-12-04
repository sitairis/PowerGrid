class Source {
    /**
     * Конструктор
     * @param name
     * @param power
     */
    constructor(name, power,) {
        if (!name || !power){
            throw new Error(`Неправильный ввод`);
        }
        if (!isString(name) || !isNumber(power)){
            throw new Error(`Неправильный ввод`);
        }
        if (power < 0){
           throw new Error(`Мощьность меньше нуля`);
        }
        let parspower = Number.parseFloat(power);
        this._name = name;
        this._power = parspower;
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString(){
        return `Название: ${this.name}
Мощность (КВт*ч): ${this.power}`;
    }

    /**
     * Подсчет производимой мощности
     * @param hours
     * @returns {number}
     */
    calculateVolumeOfProduction(hours) {
        if(!isRightPeriod(hours)){
            throw new Error(`Неверно введен период`);
        }
        if( hours < 0){
            throw new Error(`Период отрицательное число`);
        }
        return this.power * hours;
    }

    get power() {
        return this._power;
    }

    // set power(power) {
    //     let parspower = Number.parseFloat(power);
    //     if(!isNumber(parspower)){
    //         throw new Error(`Неправильный ввод`);
    //     }
    //     this._power = parspower;
    // }

    get name() {
        return this._name;
    }

    // set name(name) {
    //     if(!isString(name)){
    //         throw new Error(`Неправильный ввод`);
    //     }
    //     this._name = name;
    // }
}

class PowerLine extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param price
     */
    constructor(name, power, price){
        super(name, power);
        let parsprice = Number.parseFloat(price);
        if (!isNumber(parsprice)){
            throw new Error(`Неворный ввод`);
        }
        this._priceKVt = parsprice;//KVt*h
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString(){
        return `${super.toString()}
Цена (руб за 1 КВт*ч): ${this.priceKVt}`;
    }

    /**
     * Подсчет мощности ЛЭП
     * @param hours
     * @returns {number}
     */
    calculateVolumeOfProduction(hours) {
        return super.calculateVolumeOfProduction(hours);
    }

    /**
     * Подсчет затрат на передачу энергии по ЛЭП
     * @param hours
     * @returns {number}
     */
    calculatePriceOfTransport(hours){
        if( hours < 0){
            throw new Error(`Период отрицательное число`);
        }
        if(!isRightPeriod(hours)){
            throw new Error(`Неверно введен период`);
        }
        return super.calculateVolumeOfProduction(hours) * this.priceKVt;
    }

    get priceKVt() {
        return this._priceKVt;
    }

    // set priceKVt(value) {
    //     let parsvalue = Number.parseFloat(value);
    //     if (!isNumber(parsvalue)){
    //         throw new Error(`Неворный ввод`);
    //     }
    //     this._priceKVt = parsvalue;
    // }
}

class PowerStation extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param type
     */
    constructor(name, power, type) {
        if (!isRightPowerOfStation(power)){
            throw new Error(`Неправильный ввод`);
        }
        super(name, power);
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

    /**
     * Подсчет производимой мощности электростанции за
     * данный промежуток времени
     * @param hours
     * @returns {number}
     */
    calculateVolumeOfProduction(hours){
        return super.calculateVolumeOfProduction(hours);
    }

    get type() {
        return this._type;
    }

    // set type(value) {
    //     if (!isString(value)){
    //         throw new Error(`Неправильный ввод`);
    //     }
    //     this._type = value;
    // }
}

class SolarPanel extends Source{
    /**
     * Конструктор
     * @param name
     * @param power
     * @param type
     */
    constructor(name, power, type){
        if (!isRightPowerOfSolarPanel(power)){
            throw new Error(`Неправильный ввод`);
        }
        super(name, power);
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
    calculateVolumeOfProduction(hours){
        let workingHours = hours/2;

        return super.calculateVolumeOfProduction(workingHours);
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

class Consumer{
    /**
     * Конструктор
     * @param address
     * @param countOfFlats
     */
    constructor(address, countOfFlats){
        if(!isString(address) || !isRightCountOfFlats(countOfFlats)){
            throw new Error(`Неправильный ввод`);
        }
        this._address = address;
        this._countOfFlats = countOfFlats;
        this._volumeOfConsumptionDay = 4;
        this._volumeOfConsumptionNight = 1;
    }

    /**
     * Переопределенный toString
     * @returns {string}
     */
    toString(){
        return `Адрес дома : ${this.address}
Количество квартир : ${this.countOfFlats}
Потребление днем (КВт): ${this.volumeOfConsumptionDay}
Потребление ночью (КВт): ${this.volumeOfConsumptionNight}`;
    }

    /**
     * Подсчет объема потребления дома
     * за данный промежуток времени
     * @param hours
     * @returns {number}
     */
    calculateVolumeOfConsumption(hours) {
        if(!isRightPeriod(hours)){
            throw new Error(`Неверно введен период`);
        }
        if( hours < 0){
            throw new Error(`Период отрицательное число`);
        }

        return this.countOfFlats * (this.volumeOfConsumptionNight/24 + this.volumeOfConsumptionDay/24) * hours;
    }

    get address() {
        return this._address;
    }

    // set address(value) {
    //     if(!isString(value)){
    //         throw new Error(`Неправильный ввод`);
    //     }
    //     this._address = value;
    // }

    get countOfFlats() {
        return this._countOfFlats;
    }

    // set countOfFlats(value) {
    //     if(!isRightCountOfFlats(value)){
    //         throw new Error(`Неправильный ввод`);
    //     }
    //     this._countOfFlats = value;
    // }

    get volumeOfConsumptionDay() {
        return this._volumeOfConsumptionDay;
    }


    get volumeOfConsumptionNight() {
        return this._volumeOfConsumptionNight;
    }


}

class Grid {
    /**
     * Конструктор
     * @param price
     * @param period
     */
    constructor(price, period) {
        if(!isNumber(price) && !isRightPeriod(period)){
            throw new Error(`Неправильный ввод`);
        }
        if( period < 0){
            throw new Error(`Неверно введен период`);
        }
        this._marketPrice = price;
        this._period = toHour(Math.round(period));
        this._powerStations = [];
        this._solarPanels = [];
        this._powerLines = [];
        this._consumers = [];
    }

    /**
     * Подсчет общей мощности производимой и затраченной энергии за
     * данный период времени и подсчет количества энергии на экспорт и импорт
     * @returns {string}
     */
    calculatePower() {

        let volumeOfConsumption = this.consumers.reduce((totalSum, currentElement) => totalSum + currentElement.calculateVolumeOfConsumption(this.period), 0);

        let produce = this.calculateVolumeOfTotalProduction();

        if (volumeOfConsumption >= produce) {
            this.importPower = volumeOfConsumption - produce;
            this.exportPower = 0;
        } else {
            this.importPower = 0;
            this.exportPower = produce - volumeOfConsumption;
        }

        return `Количество произведенной энергии (КВт): ${produce.toFixed(2)}
Количество потребленной энергии (КВт): ${volumeOfConsumption}
Энергия на экспорт (КВт): ${this.exportPower}
Энергия на импорт (КВт): ${this.importPower}`
    }

    /**
     * Подсчет общего количества произведенной энергии
     * @returns {*}
     */
    calculateVolumeOfTotalProduction() {

        let volumePowerStations = this.powerStations.reduce((totalSum, currentElement) => totalSum + currentElement.calculateVolumeOfProduction(this.period), 0);
        let volumeOfSolarPanels = this.solarPanels.reduce((totalSum, currentElement) => totalSum + currentElement.calculateVolumeOfProduction(this.period), 0);

        return volumePowerStations + volumeOfSolarPanels;
    }

    /**
     * Подсчет дохода от произведенной энергии
     * @returns {number}
     */
    calculateIncome() {

        let all = this.calculateVolumeOfTotalProduction();

        return all * this.marketPrice;
    }

    /**
     * Подсчет затрат энергии на транспортировку и потребление
     * @returns {*}
     */
    calculateCosts() {

        let costsTr = this.powerLines.reduce((totalSum, currentElement) => totalSum + currentElement.calculatePriceOfTransport(this.period),0);

        let costsCons = this.consumers.reduce((totalSum, currentElement) => totalSum + currentElement.calculateVolumeOfConsumption(this.period), 0) * this.marketPrice;

        return costsCons + costsTr;
    }

    /**
     * Есть ли доход за данный период времени
     * @returns {boolean}
     */
    isProfitable() {
        return !!(this.calculateIncome() + this.calculateCosts());
    }

    /**
     * Отчет о состоянии сети
     * @returns {string}
     */
    getReport() {

        return `Информация о сети:
${this.calculatePower()}
Доход : ${this.calculateIncome()}
Расход : ${this.calculateCosts()}
Выгодно : ${this.isProfitable()}`
    }

    get powerLines() {
        return this._powerLines;
    }

    set powerLines(value) {
        this._powerLines.push(value);
    }

    get period() {
        return this._period;
    }

    // set period(value) {
    //     this._period = toHour(value);
    // }

    get powerStations() {
        return this._powerStations;
    }

    set powerStations(value) {
        this._powerStations.push(value);
    }

    get solarPanels() {
        return this._solarPanels;
    }

    set solarPanels(value) {
        this._solarPanels.push(value);
    }

    get consumers() {
        return this._consumers;
    }

    set consumers(value) {
        this._consumers = value;
    }

    get marketPrice() {
        return this._marketPrice;
    }

    // set marketPrice(value) {
    //     this._marketPrice = value;
    // }
}


let address1 = 'Минск, ул.Садовая, д.1';
let countOfFlatsInHouse1 = 100;

let address2 = 'Минск, ул.Садовая, д.2';
let countOfFlatsInHouse2 = 200;

let address3 = 'Минск, ул.темная, д.3';
let countOfFlatsInHouse3 = 300;

let address4 = 'Минск, ул.Садовая, д.4';
let countOfFlatsInHouse4 = 400;


let house1 = new Consumer( address1, countOfFlatsInHouse1);
let house2 = new Consumer( address2, countOfFlatsInHouse2);
let house3 = new Consumer( address3, countOfFlatsInHouse3);
let house4 = new Consumer( address4, countOfFlatsInHouse4);

let nameCompany = 'SolarCompany';
let powerOfSolarPanel = (1000/12).toFixed(2);
let typeOfSolarPanel = 'spT1-1';

let solarPanelT1 = new SolarPanel(nameCompany, powerOfSolarPanel, typeOfSolarPanel);

let nameOfPowerPlant = 'Электростанция 1';
let powerOfPlant = (90000/24).toFixed(2);
let typeOfPlant = 'гидро';

let powerPlant1 = new PowerStation(nameOfPowerPlant, powerOfPlant, typeOfPlant);

let powerGrid1 = new PowerLine('pg1', 220, 0.1188);

let grid = new Grid(0.5611, 365);

grid.powerLines = powerGrid1;
grid.consumers = [house1, house2, house3, house4];
grid.powerStations = powerPlant1;
grid.solarPanels = solarPanelT1;

console.log(`${grid.getReport()}`);

/**
 * Перевод дней в часы
 * @param days
 * @returns {number}
 */
function toHour(days) {
    return days * 24;
}

/**
 * Проверка на String
 * @param value
 * @returns {boolean}
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * Проверка на Number
 * @param value
 * @returns {boolean}
 */
function isNumber(value) {
    return typeof value === 'number';
}

/**
 * Проверка на правильность введенного типа электростанции
 * @param value
 * @returns {boolean}
 */
function isRightTypeOfPowerStation(value) {
    let types = ['гидро', 'тепло', 'атомная'];

    return isString(value) && types.includes(value);
}

/**
 * Проверка на правильность введенной мощности электростанции
 * @param value
 * @returns {boolean}
 */
function isRightPowerOfStation(value){
    return isNumber(value) && value >= 1 && value <= 100;
}

/**
 * Проверка на правильность введенной мощности солнечной батареии
 * @param value
 * @returns {boolean}
 */
function isRightPowerOfSolarPanel(value){
    return isNumber(value) && value >= 1 && value <= 5;
}

/**
 * Проверка на правильность введенного количества квартир в доме
 * @param value
 * @returns {boolean}
 */
function isRightCountOfFlats(value){
    return isNumber(value) && value >= 1 && value <= 400;
}

/**
 * Проверка на правильность введенного для отчета периода
 * @param value
 * @returns {boolean}
 */
function isRightPeriod(value) {
    return isNumber(value) && value >=30 && value <= 2000;
}