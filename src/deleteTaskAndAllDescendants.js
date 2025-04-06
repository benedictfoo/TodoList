import { filterTasksStore, getTasksStore } from "./store/TaskStore.js";
export default function deleteTaskAndAllDescendants(taskId) {
  const descendants = new Set();

  function findDescendants(id) {
    for (const task of getTasksStore()) {
      if (task.parentId === id) {
        descendants.add(task.id);
        findDescendants(task.id); // recursively find more
      }
    }
  }

  findDescendants(taskId);

  filterTasksStore((task) => task.id !== taskId && !descendants.has(task.id));
}
