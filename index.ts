import { isObject } from "lodash";

// cloneDeep
// ========================================
function cloneDeep(source) {
  return Object.entries(source).reduce((memo, [key, value]) => {
    return {
      ...memo,
      [key]: isObject(value) ? cloneDeep(value) : value
    };
  }, {});
}

//console.log(cloneDeep({ foo: "bar", deep: { age: 33 } }));

// uniq
// ===========================================
function uniq(xs) {
  return xs.filter((x, index) => {
    return xs.indexOf(x) === index;
  });
}

// console.log(uniq([1, 2, 3, 4, 5, 5, 6, 7, 8, 2, 2, 2]));

// flatten
// ===========================================
// [1,2, [3,4], 5,6,7, [9, [10]]]
function flatten(xs) {
  return xs.reduce((memo, x) => {
    if (Array.isArray(x)) {
      return [...memo, ...flatten(x)];
    } else {
      return [...memo, x];
    }
  }, []);
}

// console.log(flatten([1, 2, [3, 4], 5, 6, 7, [9, [10]]]));

