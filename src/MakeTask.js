import LogError from "./LogError.js";
import Task from "./Task.js";

function MakeTask(taskObject) {
  if (!taskObject.title) {
    LogError("Title is required");
    return;
  } else {
    console.log(Task(taskObject));
    return;
  }
}
MakeTask({ title: "Yes" });
