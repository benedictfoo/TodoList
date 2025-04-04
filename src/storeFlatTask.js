import FlatTasksStore from "./FlatTasksStore.js";
import makeTask from "./makeTask.js";

export default function storeFlatTask(flatTask, flatTasksStore) {
  flatTasksStore.store.push(flatTask);
  console.log(flatTasksStore.store);
}

const task = makeTask({
  title: "YO",
  description: "Description",
  date: 8640000000000000,
  priority: 1,
  parent: null,
});

const flatTasksStore = FlatTasksStore();
storeFlatTask(task, flatTasksStore);
const task2 = makeTask({
  title: "YO2",
  description: "Description2",
  date: 8640000000,
  parent: null,
});
storeFlatTask(task2, flatTasksStore);
