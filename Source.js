class Source {

    constructor(name, power,) {
        this._name = name;
        this._power = power;
    }

    get power() {
        return this._power;
    }

    set power(power) {
        this._power = power;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    toHour(days) {
        return days * 24;
    }

    toString(){
        return `Название: ${this.name}
Мощность (КВт*ч): ${this.power}`;
    }
    calculatePowerOutput(hours) {
        return this.power * hours;
    }
}

Source.SOURCES = [];

class PowerGrid extends Source{

    constructor(name, power, price){
        super(name, power);
        this._importPower = 0;
        this._exportPower = 0;
        this._priceMegawatt = price;//KVt*h
    }

    get priceMegawatt() {
        return this._priceMegawatt;
    }

    set priceMegawatt(value) {
        this._priceMegawatt = value;
    }

    get importPower() {
        return this._importPower;
    }

    set importPower(value) {
        this._importPower = value;
    }

    get exportPower() {
        return this._exportPower;
    }

    set exportPower(value) {
        this._exportPower = value;
    }

    toString(){
        return `${super.toString()}
Цена (руб за 1 КВт*ч): ${this.priceMegawatt}`;
    }

    calculatePower(period){

        let periodInHour = this.toHour(period);
        let valueOfEnergy = Source.SOURCES.reduce((totalSum, currentElement) => totalSum + currentElement.calculatePowerOutput(periodInHour), 0).toFixed(2);
        let valueOfConsumption = Consumer.CONSUMERS.reduce((totalSum, currentElement) => totalSum + currentElement.calculateConsumption(periodInHour), 0).toFixed(2);

        if ( valueOfEnergy > valueOfConsumption ){
            this.importPower = 0;
            this.exportPower = valueOfEnergy - valueOfConsumption;
        }

        return `Количество произведенной энергии (КВт): ${valueOfEnergy}
Количество потребленной энергии (КВт): ${valueOfConsumption}
Энергия на экспорт (КВт): ${this.exportPower}
Энергия на импорт (КВт): ${this.importPower}`
    }
}

class PowerPlant extends Source{

    constructor(name, power, type) {
        super(name, power);
        this._type = type;
    }

    get type() {
        return this._type;
    }

    toString(){
        return `${super.toString()}
Тип электростации: ${this.type}`;
    }
    calculatePowerOutput(period){
        let periodInHours = this.toHour(period);
        return super.calculatePowerOutput(periodInHours);
    }
}

class SolarPanel extends Source{
//1-5 MVt
    constructor(name, power, type){
        super(name, power);
        this._type = type;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    toString(){
        return `${super.toString()}
Тип солнечной панели: ${this.type}`;
    }

    calculatePowerOutput(period){

        let periodInHour = this.toHour(period)/2;

        return super.calculatePowerOutput(periodInHour);
    }
}

class Consumer{
    constructor(address, countOfFlats){
        this._address = address;
        this._countOfFlats = countOfFlats;
        this._volumeOfConsumptionDay = 4;
        this._volumeOfConsumptionNight = 1;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get countOfFlats() {
        return this._countOfFlats;
    }

    set countOfFlats(value) {
        this._countOfFlats = value;
    }

    get volumeOfConsumptionDay() {
        return this._volumeOfConsumptionDay;
    }

    set volumeOfConsumptionDay(value) {
        this._volumeOfConsumptionDay = value;
    }

    get volumeOfConsumptionNight() {
        return this._volumeOfConsumptionNight;
    }

    set volumeOfConsumptionNight(value) {
        this._volumeOfConsumptionNight = value;
    }

    toString(){
        return `Адрес дома : ${this.address}
Количество квартир : ${this.countOfFlats}
Потребление днем (КВт): ${this.volumeOfConsumptionDay}
Потребление ночью (КВт): ${this.volumeOfConsumptionNight}`;
    }

    calculateConsumption(period) {

        return this.countOfFlats * (this.volumeOfConsumptionNight + this.volumeOfConsumptionDay) * period;
    }
}

Consumer.CONSUMERS = [];

let period = 365;

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

Consumer.CONSUMERS.push(house1);
Consumer.CONSUMERS.push(house2);
Consumer.CONSUMERS.push(house3);
Consumer.CONSUMERS.push(house4);
console.log(`${house1.toString()}`);
// console.log(`${house1.calculateConsumption(period)} KВт`);//период в днях

let nameCompany = 'SolarCompany';
let powerOfSolarPanel = (1000/12).toFixed(2);
let typeOfSolarPanel = 'spT1-1';

let solarPanelT1 = new SolarPanel(nameCompany, powerOfSolarPanel, typeOfSolarPanel);

Source.SOURCES.push(solarPanelT1);

console.log(`${solarPanelT1.toString()}`);
// console.log(`${solarPanelT1.calculatePowerOutput(period).toFixed(2)}`);

let nameOfPowerPlant = 'Электростанция 1';
let powerOfPlant = (90000/24).toFixed(2);
let typeOfPlant = 'Гидро';

let powerPlant1 = new PowerPlant(nameOfPowerPlant, powerOfPlant, typeOfPlant);

Source.SOURCES.push(powerPlant1);

console.log(`${powerPlant1.toString()}`);
// console.log(`${powerPlant1.calculatePowerOutput(period).toFixed(2)}`);

let powerGrid1 = new PowerGrid('pg1', 220, 0.1188);