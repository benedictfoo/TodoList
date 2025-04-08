import Task from "../constructor/Task";
import { getTasksFromStore } from "../store/TaskStore";
import createElement from "../uiComponents/createElement";
const acceptableFields = Object.keys(Task({}));
export default function (filter) {
  // only if object
  if (
    typeof filter === "object" &&
    !Array.isArray(filter) &&
    Object.keys(filter).length > 0
  ) {
    const cleanedFilter = Object.fromEntries(
      Object.entries(filter).filter(([key]) => acceptableFields.includes(key))
    );
    const tasks = getTasksFromStore().filter((task) =>
      Object.entries(cleanedFilter).every(([key, value]) => task[key] === value)
    );
    console.log(tasks);
    return;
  } else {
    const tasks = getTasksFromStore();
    console.log(tasks);

    return;
  }
}
