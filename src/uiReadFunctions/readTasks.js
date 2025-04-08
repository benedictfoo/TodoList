import Task from "../constructor/Task";
import { getTasksFromStore } from "../store/TaskStore";
import isNonEmptyObject from "../uiComponents/isNonEmptyObject";
const acceptableFields = Object.keys(Task({}));

export default function (filter) {
  // only if object and not empty and not array
  if (isNonEmptyObject(filter)) {
    const cleanedFilter = Object.fromEntries(
      Object.entries(filter).filter(([key]) => acceptableFields.includes(key))
    );
    const tasks = getTasksFromStore().filter((task) =>
      Object.entries(cleanedFilter).every(([key, value]) => task[key] === value)
    );

    return tasks;
  } else {
    const tasks = getTasksFromStore();

    return tasks;
  }
}
