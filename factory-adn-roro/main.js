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
  return {
    name,
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const roma = createStudent({
  name: "Romario",
  age: 26,
  email: "rdiaz@gmail.com",
  twitter: "romadc",
});
