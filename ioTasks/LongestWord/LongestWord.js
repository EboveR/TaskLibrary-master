export default {
  _id: "60870123aa98e16dc75fbc75",
  // ^ Must be unique field generated with new mongoose.Types.ObjectId().toString()
  name: "LongestWord",
  // It should be put in description.md file in the same folder and this filed should be a relative path to the file
  descriptionPath: "ioTasks/LongestWord/description.md",
  timeLimit: "",
  inputOutput: [
    // Types CANNOT be changed after task is added or it will break
    // If using any typed language all inputs and outputs MUST HAVE THE SAME TYPES
    // Values can be changed freely!
    {
      input: {
        value: "Hello World",
        type: "String",
        //   Possible types: ["String", "Number", "Boolean", "ArrayString", "ArrayNumber"],
      },
      output: {
        value: "Hello",
        type: "String",
        //   Possible types: ["String", "Number", "Boolean", "ArrayString", "ArrayNumber"],
      },
    },
  ],
  languages: ["JavaScript", "Ruby", "Python"],
};
