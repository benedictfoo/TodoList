import Task from "./Task.js";
import CheckTitle from "./CheckTitle.js";
import CheckOptionalDate from "./CheckOptionalDate.js";
import CheckOptionalDescription from "./CheckOptionalDescription.js";
import LogError from "./LogError.js";
function MakeTask(taskObject) {
  if (!taskObject) {
    LogError("No task given for saving");
    return;
  }
  if (
    CheckTitle(taskObject.title) &&
    CheckOptionalDate(taskObject.date) &&
    CheckOptionalDescription(taskObject.description)
  ) {
    console.log(Task(taskObject));
  }
}
MakeTask({ title: "YO", description: "Description", date: Date.now() });
