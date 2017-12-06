import {
    isRightPeriod, isString, isRightCountOfFlats, isNumber, isRightPowerOfStation,
    isRightTypeOfPowerStation, isRightPowerOfSolarPanel
} from "./utils";

export function checkAddress(address) {

    if (!address) {
        throw new Error(`Адрес не введен.`);
    }

    if(!isString(address)) {
        throw new Error(`Неверно введен адрес дома: строка.`);
    }
}

export function checkCountFlats(countFlats) {

    if (!countFlats) {
        throw new Error(`Не введено количество квартир.`);
    }

    if(!isRightCountOfFlats(countFlats)) {
        throw new Error(`Неверно введено количество квартир в доме: число от 1 до 400.`);
    }
}

export function checkPeriod(hours) {

    if(!isRightPeriod(hours)) {
        throw new Error(`Неверно введен период: число от 30 до 2000`);
    }
}

export function checkDAILY_CONSUMPTION(DAILY_CONSUMPTION) {

    if (!DAILY_CONSUMPTION) {
        throw new Error('Константа _DAILY_CONSUMPTION пуста.');
    }
}

export function checkNIGHT_CONSUMPTION(NIGHT_CONSUMPTION) {

    if (!NIGHT_CONSUMPTION) {
        throw new Error('Константа _NIGHT_CONSUMPTION пуста.');
    }
}

export function checkPower(power) {

    if (!power) {
        throw new Error(`Мощность не введена`);
    }

    if (power < 0) {
        throw new Error(`Мощьность только положительное число`);
    }

    if (!isNumber(power)) {
        throw new Error(`Неверно введена мощность`);
    }

    if (!isRightPowerOfStation(power)) {
        throw new Error(`Неверно введена мощность станции: от 1 до 100`);
    }

    if (!isRightPowerOfSolarPanel(power)) {
        throw new Error(`Неверно введена мощность солнечной батареи: от 1 до 4`);
    }
}

export function checkPrice(price) {

    if (!isNumber(price)) {
        throw new Error(`Неверно введена цена`);
    }
}

export function checkStationType(type) {

    if(!isString(type)) {
        throw new Error(`Неверно введен типа станции: строка.`);
    }

    if (!isRightTypeOfPowerStation(type)) {
        throw new Error(`Неправильный ввод типа станции`);
    }
}

export function checkPanelType(type) {

    if(!isString(type)) {
        throw new Error(`Неверно введен типа панели: строка.`);
    }
}

export function checkNameSource(name) {

    if (!name) {
        throw new Error(`Название не введено`);
    }

    if (!isString(name)) {
        throw new Error(`Неверно введено название источника: строка.`);
    }
}

export function checkPowerLines(powerLines) {

    if(powerLines.length === 0) {
        throw new Error(`Список ЛЭП пуст`);
    }
}

export function checkPowerLine(powerLine) {

    if (!powerLine) {
        throw new Error (`Не добавили ЛЭП`);
    }

    if(typeof powerLine !== 'object') {
        throw new Error (`Неправильно ввели ЛЭП`);
    }
}

export function checkPowerStations(powerStations) {

    if(powerStations.length === 0) {
        throw new Error(`Список ЛЭП пуст`);
    }
}

export function checkPowerStation(powerStation) {

    if (!powerStation) {
        throw new Error (`Не добавили ЛЭП`);
    }

    if(typeof powerStation !== 'object') {
        throw new Error (`Неправильно ввели электростацию`);
    }
}

export function checkSolarPanels(solarPanels) {

    if(solarPanels.length === 0) {
        throw new Error(`Список солнечных панелей пуст`);
    }
}

export function checkSolarPanel(solarPanel) {

    if (!solarPanel) {
        throw new Error (`Не добавили солнечную панель`);
    }

    if(typeof solarPanel !== 'object') {
        throw new Error (`Неправильно ввели солнечную панель`);
    }
}

export function checkConsumers(consumers) {

    if(consumers.length === 0) {
        throw new Error(`Список потребителей пуст`);
    }
}

export function checkConsumer(consumer) {

    if (!consumer) {
        throw new Error (`Не добавили потребителя`);
    }

    if(typeof consumer !== 'object') {
        throw new Error (`Неправильно добавили потребителя`);
    }
}

