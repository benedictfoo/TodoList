export default function findSubTaskDepth(tasksStore, taskId, depth = 0) {
  const task = tasksStore.find((t) => t.id === taskId);
  if (!task?.parentId) return depth;
  return findSubTaskDepth(tasksStore, task.parentId, depth + 1);
}
