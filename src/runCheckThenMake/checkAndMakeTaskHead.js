import checkTaskHead from "../checkTaskHeadProperties/checkTaskHead.js";
import TaskHead from "../model/TaskHead.js";

export default function checkAndMakeTaskHead(taskHeadObject) {
  if (!taskHeadObject) {
    LogError("No project given for saving");
    return;
  }
  if (checkTaskHead(taskHeadObject.name)) {
    return TaskHead(taskHeadObject);
  }
}
