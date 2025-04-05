import TasksStore from "../store/TasksStore";
export default function buildTaskTree(taskId) {
  const rootTask = TasksStore.find((t) => t.id === taskId);
  if (!rootTask) return null;

  const tree = { ...rootTask, subtasks: [] };

  const subtasks = TasksStore.filter((t) => t.parentId === taskId);

  subtasks.forEach((subtask) => {
    tree.subtasks.push(buildTaskTree(subtask.id));
  });

  return tree;
}
