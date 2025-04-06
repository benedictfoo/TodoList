export default function findSubTaskDepth(Store, taskId, depth = 0) {
  const task = Store.find((t) => t.id === taskId);
  if (!task?.parentId) return depth;
  return findSubTaskDepth(Store, task.parentId, depth + 1);
}
