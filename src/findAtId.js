import Store from "./store/TasksStore";
export default function findAtId(id) {
  const findInTasksStore = Store.find((child) => (child.id = id));
  // console.log(findInTasksStore);
  return findInTasksStore;
}
