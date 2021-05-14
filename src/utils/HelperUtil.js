/**
 * this method returns boolean value if object is not null and not undefined
 * @param {any object } obj
 * @returns
 */
export const isNotNullOrUndefined = obj => {
  if (obj != null && obj != undefined) {
    return true;
  } else {
    return false;
  }
};

/**
 * this method returns boolean value if array is not null and not undefined and also not empty
 * @param {array object } obj
 * @returns
 */
export const isNotEmpty = arr => {
  if (arr != null && arr != undefined && arr.length != 0) {
    return true;
  } else {
    return false;
  }
};
