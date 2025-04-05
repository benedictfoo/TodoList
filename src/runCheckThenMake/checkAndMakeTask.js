import Task from "../Task.js";
import checkTitle from "../checkTaskProperties/checkTitle.js";
import checkOptionalDate from "../checkTaskProperties/checkOptionalDate.js";
import checkOptionalDescription from "../checkTaskProperties/checkOptionalDescription.js";
import LogError from "../logging/LogError.js";
import checkOptionalPriority from "../checkTaskProperties/checkOptionalPriority.js";
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
