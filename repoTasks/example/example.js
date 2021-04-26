export default {
  _id: "607850549a93905684593df2",
  // ^ Must be unique field generated with new mongoose.Types.ObjectId().toString()
  name: "Example repo task",
  // It should be put in description.md file in the same folder and this filed should be a relative path to the file
  descriptionPath: "repoTasks/example/description.md",
  timeLimit: "",
  repoLink: "https://github.com/codeallyio/TaskLibrary.git",
  // Available options: [liveShare, git, gitOnly, liveShareOnly]
  hiringType: "git",
  testStartCommand: "start Example",
  testReportPath: "exampleResult.html",
  envVariables: [
    ["VARIBALE_NAME", "VARIABLE_VALUE"],
    ["ANOTHER_VARIBALE", "ANOTHER__VALUE"],
  ],
  tags: ["exampleTag"],
  initScript: "echo 'example command'",
  // Add only if you need ports different than the default ones: [3000, 4000, 8000, 8080]
  additionalPorts: [5050],
};
