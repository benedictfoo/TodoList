import Task from "../constructor/Task.js";
import checkTitle from "../checkTaskProperties/checkTitle.js";
import checkOptionalDate from "../checkTaskProperties/checkOptionalDate.js";
import checkOptionalDescription from "../checkTaskProperties/checkOptionalDescription.js";
import LogError from "../logging/LogError.js";
import checkOptionalPriority from "../checkTaskProperties/checkOptionalPriority.js";
export default function MakeTask(input = null) {
  if (!input) {
    LogError("No task given for saving");
    return;
  }
  const { title, date, description, priority } = input;
  if (
    checkTitle(title) &&
    checkOptionalDate(date) &&
    checkOptionalDescription(description) &&
    checkOptionalPriority(priority)
  ) {
    return Task({ title, date, description, priority });
  }
}
