export default function findAtId(tasksStore, id) {
  const findInTasksStore = tasksStore.find((child) => (child.id = id));
  // console.log(findInTasksStore);
  return findInTasksStore;
}
