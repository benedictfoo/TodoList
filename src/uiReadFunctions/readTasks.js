import { isSameDay, startOfToday } from "date-fns";
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
    const tasks = getTasksFromStore().filter((task) => {
      return Object.entries(cleanedFilter).every(([key, value]) => {
        if (key === "date" && value === "upcoming") {
          if (!task.date) return false;

          return new Date(task.date) >= startOfToday();
        } else if (key === "date" && value === "today") {
          if (!task.date) return false;

          return isSameDay(new Date(task.date), new Date());
        }
        return task[key] === value;
      });
    });

    return tasks;
  } else {
    const tasks = getTasksFromStore();

    return tasks;
  }
}
