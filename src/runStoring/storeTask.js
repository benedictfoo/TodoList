import TasksStore from "./TasksStore.js";

import buildTaskTree from "./buildTaskTree.js";
import findSubTaskDepth from "./findSubTaskDepth.js";

export default function storeTask(task, tasksStore) {
  tasksStore.push(task);
}
const tasksStorage = TasksStore().store;

const taskTree = buildTaskTree(tasksStorage, 1);
console.log(findSubTaskDepth(tasksStorage, 1));

console.log(JSON.stringify(taskTree));
