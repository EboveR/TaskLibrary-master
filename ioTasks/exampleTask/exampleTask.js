export default {
  _id: "607850549a93905684533df7",
  // ^ Must be unique field generated with new mongoose.Types.ObjectId().toString()
  name: "Example task",
  // It should be put in description.md file in the same folder and this filed should be a relative path to the file
  descriptionPath: "ioTasks/exampleTask/description.md",
  timeLimit: "",
  inputOutput: [
    // Types CANNOT be changed after task is added or it will break
    // If using any typed language all inputs and outputs MUST HAVE THE SAME TYPES
    // Values can be changed freely!
    {
      input: {
        value: "4",
        type: "Number",
        //   Possible types: ["String", "Number", "Boolean", "ArrayString", "ArrayNumber"],
      },
      output: {
        value: "text",
        type: "String",
        //   Possible types: ["String", "Number", "Boolean", "ArrayString", "ArrayNumber"],
      },
    },
  ],
  languages: ["JavaScript", "Ruby", "Python"],
};
