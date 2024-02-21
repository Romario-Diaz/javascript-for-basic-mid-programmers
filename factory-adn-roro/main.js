function requiredParams(param) {
  throw new Error(param + " is required ");
}

function createStudent({
  name = requiredParams("name"),
  age = requiredParams("age"),
  email = requiredParams("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("tu nombre debe tener al menos 1 caracter");
      }
    },
    // readName() {
    //   return private._name;
    // },
    // changeName(newName) {
    //   private._name = newName;
    // },
  };

  // Object.defineProperty(public, "readName", {
  //   configurable: false,
  //   writable: false,
  // });
  // Object.defineProperty(public, "changeName", {
  //   configurable: false,
  //   writable: false,
  // });
  return public;
}

const roma = createStudent({
  name: "Romario",
  age: 26,
  email: "rdiaz@gmail.com",
  twitter: "romadc",
});
