import Task from "../constructor/Task.js";
import checkTitle from "../checkTaskProperties/checkTitle.js";
import checkOptionalDate from "../checkTaskProperties/checkOptionalDate.js";
import checkOptionalDescription from "../checkTaskProperties/checkOptionalDescription.js";
import LogError from "../logging/LogError.js";
import checkOptionalPriority from "../checkTaskProperties/checkOptionalPriority.js";
import checkOptionalParentId from "../checkTaskProperties/checkOptionalParentId.js";
import checkTaskHead from "../checkTaskHeadProperties/checkTaskHead.js";
import { setTaskHeadsStore } from "../store/getSetFilterTaskHeadsStore.js";

export default function MakeTask(input = null) {
  if (!input) {
    LogError("No task given for saving");
    return;
  }

  const { title, date, description, priority, parentId, taskHead } = input;
  if (taskHead) {
    if (checkTaskHead(taskHead)) {
      setTaskHeadsStore(taskHead);
    }
  }

  if (
    checkTitle(title) &&
    checkOptionalDate(date) &&
    checkOptionalDescription(description) &&
    checkOptionalPriority(priority) &&
    (parentId ? checkOptionalParentId(parentId) : true)
  ) {
    return Task({ title, date, description, priority, parentId, taskHead });
  }
}
