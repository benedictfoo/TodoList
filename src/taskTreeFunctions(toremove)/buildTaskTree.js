export default function buildTaskTree(Store, taskId) {
  const rootTask = Store.find((t) => t.id === taskId);
  if (!rootTask) return null;

  const tree = { ...rootTask, subtasks: [] };

  const subtasks = Store.filter((t) => t.parentId === taskId);

  subtasks.forEach((subtask) => {
    tree.subtasks.push(buildTaskTree(Store, subtask.id));
  });

  return tree;
}
