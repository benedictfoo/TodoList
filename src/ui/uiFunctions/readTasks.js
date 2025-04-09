import { isSameDay, startOfToday } from "date-fns";
import Task from "../../backend/constructor/Task";
import { getTasksFromStore } from "../../backend/store/TaskStore";
import isNonEmptyObject from "./isNonEmptyObject";
import cleanFilter from "./cleanFilter";

export default function (filter) {
  // only if object and not empty and not array
  if (isNonEmptyObject(filter)) {
    const cleanedFilter = cleanFilter(filter);
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
