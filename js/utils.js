/**
 * Перевод дней в часы
 * @param days
 * @returns {number}
 */
export function toHour(days) {
    return days * 24;
}

/**
 * Проверка на String
 * @param value
 * @returns {boolean}
 */
export function isString(value) {
    return typeof value === 'string';
}

/**
 * Проверка на Number
 * @param value
 * @returns {boolean}
 */
export function isNumber(value) {
    return typeof value === 'number';
}

/**
 * Проверка на правильность введенного типа электростанции
 * @param value
 * @returns {boolean}
 */
export function isRightTypeOfPowerStation(value) {
    let types = ['гидро', 'тепло', 'атомная'];

    return isString(value) && types.includes(value);
}

/**
 * Проверка на правильность введенной мощности электростанции
 * Значение мощности должно входить в промежуток [1,100].
 * @param value
 * @returns {boolean}
 */
export function isRightPowerOfStation(value) {
    return isNumber(value) && value >= 1 && value <= 100;
}

/**
 * Проверка на правильность введенной мощности солнечной батареии.
 * Значение мощности должно входить в промежуток [1,5].
 * @param value
 * @returns {boolean}
 */
export function isRightPowerOfSolarPanel(value) {
    return isNumber(value) && value >= 1 && value <= 5;
}

/**
 * Проверка на правильность введенного количества квартир в доме
 * Значение количества квартир в доме должно входить в промежуток [1,400].
 * @param value
 * @returns {boolean}
 */
export function isRightCountOfFlats(value) {
    return isNumber(value) && value >= 1 && value <= 400;
}

/**
 * Проверка на правильность введенного для отчета периода
 * Значение периода должно входить в промежуток [30,2000].
 * @param value
 * @returns {boolean}
 */
export function isRightPeriod(value) {
    return isNumber(value) && value >=30 && value <= 2000;
}