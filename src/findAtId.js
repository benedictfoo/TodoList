export default function findAtId(Store, id) {
  const findInTasksStore = Store.find((child) => child.id === id);

  return findInTasksStore;
}
