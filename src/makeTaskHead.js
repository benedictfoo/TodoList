import checkTaskHead from "./checkTaskHead/checkTaskHead.js";
import TaskHead from "./taskHead.js";

export default function makeTaskHead(taskHeadObject) {
  if (!taskHeadObject) {
    LogError("No project given for saving");
    return;
  }
  if (checkTaskHead(taskHeadObject.name)) {
    return TaskHead(taskHeadObject);
  }
}

console.log(makeTaskHead({ name: "Dad stuff" }));
