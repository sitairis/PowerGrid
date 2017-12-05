function checkAddress(address) {
    if (!address){
        throw new Error(`Адрес не введен.`);
    }
    if(!isString(address)){
        throw new Error(`Неверно введен адрес дома: строка.`);
    }
}

function checkCountFlats(countFlats) {
    if (!countFlats){
        throw new Error(`Не введено количество квартир.`);
    }
    if(!isRightCountOfFlats(countFlats)){
        throw new Error(`Неверно введено количество квартир в доме: число от 1 до 400.`);
    }
}

function checkPeriod(hours) {
    if(!isRightPeriod(hours)){
        throw new Error(`Неверно введен период: число от 30 до 2000`);
    }
}

function checkDAILY_CONSUMPTION(DAILY_CONSUMPTION) {
    if (!DAILY_CONSUMPTION){
        throw new Error('Константа _DAILY_CONSUMPTION пуста.');
    }
}

function checkNIGHT_CONSUMPTION(NIGHT_CONSUMPTION) {
    if (!NIGHT_CONSUMPTION){
        throw new Error('Константа _NIGHT_CONSUMPTION пуста.');
    }
}
