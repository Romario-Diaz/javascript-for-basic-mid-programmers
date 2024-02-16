const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
  },
};

// does not work with complex objects
// const obj2 = {};

/*
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

// Object assign does not work with complex objects
const obj3 = Object.assign({}, obj1);

// Object create, works halfway, you can still modify the object with
const obj4 = Object.create(obj1);
*/

// convert an object to an string
const stringifiesComplexObj = JSON.stringify(obj1);

// creates an object from an object string
const obj2 = JSON.parse(obj1);
