import Task from "./Task.js";
import checkTitle from "./checkTitle.js";
import checkOptionalDate from "./checkOptionalDate.js";
import checkOptionalDescription from "./checkOptionalDescription.js";
import LogError from "./LogError.js";
import checkOptionalPriority from "./checkOptionalPriority.js";
export default function MakeTask(taskObject) {
  if (!taskObject) {
    LogError("No task given for saving");
    return;
  }
  if (
    checkTitle(taskObject.title) &&
    checkOptionalDate(taskObject.date) &&
    checkOptionalDescription(taskObject.description) &&
    checkOptionalPriority(taskObject.priority)
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
