import Task from "./Task.js";
import CheckTitle from "./CheckTitle.js";
import CheckOptionalDate from "./CheckOptionalDate.js";
import CheckOptionalDescription from "./CheckOptionalDescription.js";
import LogError from "./LogError.js";
import CheckOptionalPriority from "./CheckOptionalPriority.js";
export default function MakeTask(taskObject) {
  if (!taskObject) {
    LogError("No task given for saving");
    return;
  }
  if (
    CheckTitle(taskObject.title) &&
    CheckOptionalDate(taskObject.date) &&
    CheckOptionalDescription(taskObject.description) &&
    CheckOptionalPriority(taskObject.priority)
  ) {
    return Task(taskObject);
  }
}
// MakeTask({
//   title: "YO",
//   description: "Description",
//   date: 8640000000000000,
//   priority: 22,
// });
