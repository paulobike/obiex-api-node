"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryString = exports.stringifyKeyValuePair = exports.removeEmptyValue = void 0;
const removeEmptyValue = (obj) => {
    if (!(obj instanceof Object))
        return {};
    Object.keys(obj).forEach((key) => isEmptyValue(obj[key]) && delete obj[key]);
    return obj;
};
exports.removeEmptyValue = removeEmptyValue;
const isEmptyValue = (input) => {
    return ((!input && input !== false && input !== 0) ||
        ((typeof input === "string" || input instanceof String) &&
            /^\s+$/.test(input)) ||
        (input instanceof Object && !Object.keys(input).length) ||
        (Array.isArray(input) && !input.length));
};
const stringifyKeyValuePair = ([key, value]) => {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
    return `${key}=${encodeURIComponent(valueString)}`;
};
exports.stringifyKeyValuePair = stringifyKeyValuePair;
const buildQueryString = (params) => {
    if (!params)
        return "";
    return Object.entries(params).map(exports.stringifyKeyValuePair).join("&");
};
exports.buildQueryString = buildQueryString;
//# sourceMappingURL=utils.js.map