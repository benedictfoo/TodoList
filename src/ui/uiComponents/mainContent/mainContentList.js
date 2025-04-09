import readTasks from "../../uiFunctions/readTasks.js";
import createElement from "../../uiFunctions/createElement.js";
import mainContentListItem from "./mainContentListItem.js";
import { mainListClasses } from "../../../appVariables/classes.js";
export default function (options) {
  const tasks = readTasks(options);
  const taskElements = tasks.map((task) => mainContentListItem(task));
  const taskList = createElement(
    "ul",
    { class: mainListClasses },
    ...taskElements
  );
  return taskList;
}
