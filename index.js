import { argv } from "node:process";
import ioTasks from "./ioTasks/index.js";
import repoTasks from "./repoTasks/index.js";
import {
  createInputOutputTaskMutation,
  createTaskAutomaticallyMutation,
} from "./utils/queries.js";
import websocketLink from "./utils/websocketLink.js";
import { execute, makePromise } from "apollo-link";
import fs from "fs";

const main = async (type, taskId) => {
  let tasks;
  if (type === "repoTask") {
    tasks = repoTasks;
  } else {
    tasks = ioTasks;
  }

  if (taskId) {
    const taskToSend = tasks.find(
      (task) => task._id.toString() === taskId.toString()
    );

    const description = fs.readFileSync(taskToSend.descriptionPath, "utf8");

    await sendTaskData({ taskData: taskToSend, description, type });
  } else {
    let counter = 0;
    const maxValue = tasks.length;

    while (counter < maxValue) {
      const taskToSend = tasks[counter];

      const description = fs.readFileSync(taskToSend.descriptionPath, "utf8");

      await sendTaskData({ taskData: taskToSend, description, type });

      counter++;
    }
  }

  return console.log("Finished task!");
};

const sendTaskData = async ({ taskData, description, type }) => {
  try {
    let mutationData;

    if (type === "repoTask") {
      mutationData = {
        query: createTaskAutomaticallyMutation,
        variables: {
          ...taskData,
          description,
          organizationId: process.env.ORGANIZATION_ID,
          teamId: process.env.TEAM_ID,
          userId: process.env.CODEALLY_USERID,
          gitLogin: process.env.GIT_LOGIN,
          gitPassword: process.env.GIT_PASSWORD,
        },
      };
    } else {
      mutationData = {
        query: createInputOutputTaskMutation,
        variables: {
          ...taskData,
          description,
          organizationId: process.env.ORGANIZATION_ID,
          teamId: process.env.TEAM_ID,
          userId: process.env.CODEALLY_USERID,
        },
      };
    }

    console.log(
      `sendTaskData - variables: ${JSON.stringify(mutationData.variables)}`
    );

    await makePromise(execute(websocketLink, mutationData))
      .then((data) =>
        console.log("Data received in sendTaskData: ", JSON.stringify(data))
      )
      .catch((error) =>
        console.log("error received in sendTaskData: ", JSON.stringify(error))
      );
  } catch (e) {
    console.log("error in sendTaskData: ", e);
  }
};

main(argv[2], argv[3]);
