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

function uniq2(source) {
  let hash = {};
  let result = [];

  for (let i = 0; i < source.length; i++) {
    if (hash[source[i]]) {
      continue;
    } else {
      hash[JSON.stringify(source[i])] = true;
      result.push(source[i]);
    }
  }

  return result;
}

//console.log(uniq2([1, 2, 3, 4, 5, 5, 6, 7, 8, 2, 2, 2]));

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

// get value by path
// ===========================================
const o = { foo: { bar: { deep: 33 } } };

function get(path, source) {
  return path.split(".").reduce((memo, current) => {
    return memo[current];
  }, source);
}

//console.log(get("foo.bar.deep", o));

// factorial
// ===========================================

function factorial(x) {
  if (x === 1) {
    return x;
  }

  return x * factorial(x - 1);
}

//console.log(factorial(5))

// Singleton
// ===========================================

class Singleton {
  static instance: Singleton = null;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = this;
      return this;
    }
  }
}

//console.log(new Singleton() === new Singleton());

// Currying
// ===========================================

function curry(f) {
  let params: Array<any> = [];

  return function _curry(...args) {
    params.push(args);

    if (arguments.length === f.length) {
      return f.apply(null, arguments);
    } else {
      return _curry;
    }
  };
}

function concatenator(a, b, c) {
  return a + b + c;
}

const curriedConcatenator = curry(concatenator);

//console.log(curriedConcatenator("A", "b", "C"));

// Shuffle
// ===========================================
function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

function shuffle(source) {
  let result = [];

  while (source.length) {
    const randomIndex = randomNumber(0, source.length);
    const pickedItem = source.splice(randomIndex, 1);
    result.push(pickedItem[0]);
  }

  return result;
}

//console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));

// Sort by object field (numbers, strings)
// ===========================================

// Pipe
// ===========================================

// prettier-ignore
function pipe(fns) {
  return (initialInput) => {

    return fns.reduce((result, fn) => {

      return fn(result);

    }, initialInput)
  }
}

// prettier-ignore
console.log(
  pipe([
    (x) => x.toUpperCase(),
    (x) => x.split('').reverse().join('')
  ])('abc')
)
