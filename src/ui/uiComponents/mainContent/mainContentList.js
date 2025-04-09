import readTasks from "../../uiFunctions/readTasks.js";
import createElement from "../../uiFunctions/createElement.js";
import mainContentListItem from "./mainContentListItem.js";

export default function (options) {
  const tasks = readTasks(options);
  const taskElements = tasks.map((task) => mainContentListItem(task));
  const taskList = createElement(
    "ul",
    { class: "main-content-list" },
    ...taskElements
  );
  return taskList;
}
