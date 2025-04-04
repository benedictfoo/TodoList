import Task from "./Task.js";
import CheckTitle from "./CheckTitle.js";
import CheckDate from "./CheckDate.js";
function MakeTask(taskObject) {
  if (CheckTitle(taskObject) && CheckDate(taskObject))
    console.log(Task(taskObject));
}
MakeTask({ title: "HEY", date: Date.now() });
