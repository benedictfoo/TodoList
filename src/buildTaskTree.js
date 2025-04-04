export default function buildTaskTree(tasksStore, taskId) {
  console.log(tasksStore);

  const rootTask = tasksStore.find((t) => t.id === taskId);
  if (!rootTask) return null;

  const tree = { ...rootTask, subtasks: [] };

  const subtasks = tasksStore.filter((t) => t.parentId === taskId);

  subtasks.forEach((subtask) => {
    tree.subtasks.push(buildTaskTree(tasksStore, subtask.id));
  });

  return tree;
}
