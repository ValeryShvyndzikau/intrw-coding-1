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

const res = cloneDeep({ foo: "bar", deep: { age: 33 } });

//console.log(res, "res");

// uniq
// ===========================================
function uniq(xs) {
  return xs.filter((x, index) => {
    return xs.indexOf(x) === index;
  });
}

console.log(uniq([1, 2, 3, 4, 5, 5, 6, 7, 8, 2, 2, 2]));
