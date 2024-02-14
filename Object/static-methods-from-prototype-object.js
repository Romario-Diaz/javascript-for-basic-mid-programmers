const object = {
    name: "Romario",
    email: "romariodiazholgado@gmail.com",
    age: 26
}

Object.keys(object);
// ["name", "email", "age"]

Object.getOwnPropertyNames(object);
// ["name", "email", "age"]

Object.entries(object);
/* [
    0: ["name", "Romario"]
    1: ["email", "romariodiazholgado@gmail.com"]
    2: ["age", 26]
] */

Object.getOwnPropertyDescriptors(object);
/*
    name: {
        value: "Romario",
        writable: true,
        configurable: true,
        enumerable: true
    },
    ...
*/