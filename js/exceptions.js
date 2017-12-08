let utils = require('./utils');

exports.checkAddress = function(address) {

    if (!address) {
        throw new Error(`Адрес не введен.`);
    }

    if(!utils.isString(address)) {
        throw new Error(`Неверно введен адрес дома: строка.`);
    }
};

exports.checkCountFlats = function(countFlats) {

    if (!countFlats) {
        throw new Error(`Не введено количество квартир.`);
    }

    if(!utils.isRightCountOfFlats(countFlats)) {
        throw new Error(`Неверно введено количество квартир в доме: число от 1 до 400.`);
    }
};

exports.checkPeriod = function(hours) {

    if(!utils.isRightPeriod(hours)) {
        throw new Error(`Неверно введен период: число от 30 до 2000`);
    }
};

exports.checkDAILY_CONSUMPTION = function(DAILY_CONSUMPTION) {

    if (!DAILY_CONSUMPTION) {
        throw new Error('Константа _DAILY_CONSUMPTION пуста.');
    }
};

exports.checkNIGHT_CONSUMPTION = function(NIGHT_CONSUMPTION) {

    if (!NIGHT_CONSUMPTION) {
        throw new Error('Константа _NIGHT_CONSUMPTION пуста.');
    }
};

exports.checkPower = function(power) {

    if (!power) {
        throw new Error(`Мощность не введена`);
    }

    if (!utils.isNumber(power)) {
        throw new Error(`Неверно введена мощность`);
    }
};

exports.checkStationPower = function (power) {
    if (!utils.isRightPowerOfStation(power)) {
        throw new Error(`Неверно введена мощность станции: от 1 до 100`);
    }
};

exports.checkPowerPanel = function (power) {
    if (!utils.isRightPowerOfSolarPanel(power)) {
        throw new Error(`Неверно введена мощность солнечной батареи: от 1 до 4`);
    }
};

exports.checkPrice = function(price) {

    if (!utils.isNumber(price)) {
        throw new Error(`Неверно введена цена`);
    }
};

exports.checkStationType = function(type) {

    if(!utils.isString(type)) {
        throw new Error(`Неверно введен типа станции: строка.`);
    }

    if (!utils.isRightTypeOfPowerStation(type)) {
        throw new Error(`Неправильный ввод типа станции`);
    }
};

exports.checkPanelType = function(type) {

    if(!utils.isString(type)) {
        throw new Error(`Неверно введен типа панели: строка.`);
    }
};

exports.checkNameSource = function(name) {

    if (!name) {
        throw new Error(`Название не введено`);
    }

    if (!utils.isString(name)) {
        throw new Error(`Неверно введено название источника: строка.`);
    }
};

exports.checkPowerLines = function(powerLines) {

    if(powerLines.length === 0) {
        throw new Error(`Список ЛЭП пуст`);
    }
};

exports.checkPowerLine = function(powerLine) {

    if (!powerLine) {
        throw new Error (`Не добавили ЛЭП`);
    }

    if(typeof powerLine !== 'object') {
        throw new Error (`Неправильно ввели ЛЭП`);
    }
};

exports.checkPowerStations = function(powerStations) {

    if(powerStations.length === 0) {
        throw new Error(`Список ЛЭП пуст`);
    }
};

exports.checkPowerStation = function(powerStation) {

    if (!powerStation) {
        throw new Error (`Не добавили ЛЭП`);
    }

    if(typeof powerStation !== 'object') {
        throw new Error (`Неправильно ввели электростацию`);
    }
};

exports.checkSolarPanels = function(solarPanels) {

    if(solarPanels.length === 0) {
        throw new Error(`Список солнечных панелей пуст`);
    }
};

exports.checkSolarPanel = function(solarPanel) {

    if (!solarPanel) {
        throw new Error (`Не добавили солнечную панель`);
    }

    if(typeof solarPanel !== 'object') {
        throw new Error (`Неправильно ввели солнечную панель`);
    }
};

exports.checkConsumers = function(consumers) {

    if(consumers.length === 0) {
        throw new Error(`Список потребителей пуст`);
    }
};

exports.checkConsumer = function(consumer) {

    if (!consumer) {
        throw new Error (`Не добавили потребителя`);
    }

    if(typeof consumer !== 'object') {
        throw new Error (`Неправильно добавили потребителя`);
    }
};
