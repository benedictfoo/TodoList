import LogError from "../logging/LogError.js";
import { getTasksFromStore } from "../store/TaskStore.js";
export default function (id) {
  if (typeof id !== "string") {
    LogError("Something wrong.Invalid id.");
    return false;
  }
  const foundTask = getTasksFromStore().find((task) => id === task.id);
  if (!foundTask) {
    LogError("Unable to find task");
    return false;
  } else {
    return foundTask;
  }
}
