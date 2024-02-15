const romario = {
  name: "Romario",
  age: 18,
  approvedCourses: ["Course 1"],
  addCourse(newCourse) {
    console.log("this ", this);
    console.log("this.approve courses : ", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

/*depp inside in object properties*/

// Object.defineProperty(romario, "navigator", {
//   value: "chrome",
//   writable: true,
//   enumerable: false,
//   configurable: true,
// });

// Object.defineProperty(romario, "editor", {
//   value: "vsCode",
//   writable: false,
//   enumerable: true,
//   configurable: true,
// });

// Object.defineProperty(romario, "terminal", {
//   value: "WSL",
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });

// Object.defineProperty(romario, "pruebaNASA", {
//   value: "extraterrestres",
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// console.log(Object.keys(romario));
// console.log(Object.getOwnPropertyNames(romario));
// console.log(Object.entries(romario));

Object.seal(romario);
Object.freeze(romario);

console.log(Object.getOwnPropertyDescriptors(romario));
