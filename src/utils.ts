export const removeEmptyValue = (obj: object) => {
  if (!(obj instanceof Object)) return {};
  Object.keys(obj).forEach((key) => isEmptyValue(obj[key]) && delete obj[key]);
  return obj;
};

const isEmptyValue = (input: unknown) => {
  return (
    (!input && input !== false && input !== 0) ||
    ((typeof input === "string" || input instanceof String) &&
      /^\s+$/.test(input as string)) ||
    (input instanceof Object && !Object.keys(input).length) ||
    (Array.isArray(input) && !input.length)
  );
};

export const stringifyKeyValuePair = ([key, value]) => {
  const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
  return `${key}=${encodeURIComponent(valueString)}`;
};

export const buildQueryString = (params: object) => {
  if (!params) return "";

  return Object.entries(params).map(stringifyKeyValuePair).join("&");
};
