import TasksStore from "../store/TasksStore";
export default function findSubTaskDepth(taskId, depth = 0) {
  const task = TasksStore.find((t) => t.id === taskId);
  if (!task?.parentId) return depth;
  return findSubTaskDepth(task.parentId, depth + 1);
}
