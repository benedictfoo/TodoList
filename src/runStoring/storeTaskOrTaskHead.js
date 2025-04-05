import TasksStore from "../store/TasksStore.js";

import buildTaskTree from "../taskTreeFunctions/buildTaskTree.js";
import findSubTaskDepth from "../taskTreeFunctions/findSubTaskDepth.js";

export default function storeTaskOrTaskHead(task) {
  TasksStore.push(task);
}

const taskTree = buildTaskTree(1);
console.log(findSubTaskDepth(1));

console.log(JSON.stringify(taskTree));
