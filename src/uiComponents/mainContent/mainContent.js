import readTasks from "../../uiReadFunctions/readTasks";
import createElement from "../createElement";

export default function (options, title) {
  const mainContentHeading = createElement(
    "h1",
    { class: "main-content-heading" },
    title
  );
  const tasks = readTasks(options);
  const taskElements = tasks.map((task) =>
    createElement("li", { class: "main-content-list-item" }, task.title)
  );
  const taskList = createElement(
    "ul",
    { class: "main-content-list" },
    ...taskElements
  );
  const mainContent = createElement(
    "div",
    { class: "main-content" },
    mainContentHeading,
    taskList
  );

  return mainContent;
}
