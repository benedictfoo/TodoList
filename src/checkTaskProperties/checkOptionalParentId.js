import { getTasksStore } from "../store/getSetTasksStore.js";
import findAtId from "../findAtId.js";
import LogError from "../logging/LogError.js";
import findSubTaskDepth from "../taskTreeFunctions/findSubTaskDepth.js";
export default function checkOptionalParentId(id) {
  const Store = getTasksStore();
  const found = findAtId(Store, id);

  if (!found) {
    LogError("Something went wrong. Cannot find parent");
    return false;
  } else if (findSubTaskDepth(Store, id) >= 3) {
    LogError("Cannot create sub-tasks this deep");
    return false;
  }
  return true;
}
