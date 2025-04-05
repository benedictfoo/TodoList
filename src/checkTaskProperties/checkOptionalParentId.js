import TasksStore from "../store/TasksStore.js";
import findAtId from "../findAtId.js";
import LogError from "../logging/LogError.js";

export default function checkOptionalParentId(id) {
  const Store = TasksStore();
  const found = findAtId(Store, id);
  console.log(found);

  if (!found) {
    LogError("Something went wrong. Cannot find parent");
    return false;
  }
  return true;
}
