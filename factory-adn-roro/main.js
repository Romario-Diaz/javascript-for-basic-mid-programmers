function requiredParams(param) {
  throw new Error(param + " is required ");
}

function isArray(subject) {
  return Array.isArray(subject);
}

function LearningPath({ name = requiredParams("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };

  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParams("name"),
  age = requiredParams("age"),
  email = requiredParams("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  if (!isArray(learningPaths)) {
    console.warn("learning path is not an array");
  }
  this._learningPaths = [];

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
  // const private = {
  //   _name: name,
  //   _learningPaths: learningPaths,
  // };
  // const public = {
  //   age,
  //   email,
  //   approvedCourses,
  //   learningPaths,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get learningPaths() {
  //     return private["_learningPaths"];
  //   },
  //   set learningPaths(newLP) {
  //     if (newLP._learningPaths) {
  //       console.warn("learnning path no tiene nombre");
  //       return;
  //     }
  //     if (!newLP.courses) {
  //       console.warn("TU LP no tiene cursos");
  //       return;
  //     }
  //     if (!isArray(newLP.courses)) {
  //       console.warn("TU LP no es una lista");
  //       return;
  //     }
  //     private["_learningPaths"].push(newLP);
  //   },
  //   // readName() {
  //   //   return private._name;
  //   // },
  //   // changeName(newName) {
  //   //   private._name = newName;
  //   // },
  // };
  // // Object.defineProperty(public, "readName", {
  // //   configurable: false,
  // //   writable: false,
  // // });
  // // Object.defineProperty(public, "changeName", {
  // //   configurable: false,
  // //   writable: false,
  // // });
  //  return public;
}

Object.defineProperty(Student.prototype, "learningPaths", {
  get() {
    return this._learningPaths;
  },
  set(newLP) {
    if (newLP instanceof LearningPath) {
      console.warn("learning path is not a learning path");
      this._learningPaths.push(newLP);
    } else {
      console.warn("LP is not an instance of LearningPath");
    }
  },
});

const schoolWeb = new LearningPath({ name: "Web school" });
const schoolData = new LearningPath({ name: "Data school" });

const roma = new Student({
  name: "Romario",
  age: 26,
  email: "rdiaz@gmail.com",
  learningPaths: [
    schoolWeb,
    schoolData,
    { name: "School impostor", courses: [] },
  ],
});
