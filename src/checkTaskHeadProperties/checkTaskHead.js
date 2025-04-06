import LogError from "../logging/LogError.js";
import { getTaskHeadsStore } from "../store/getSetFilterTaskHeadsStore.js";

export default function (name) {
  if (!name) {
    LogError("Project name is required");
    return false;
  } else if (name.length > 120) {
    LogError("Name cannot be more than 120 characters");
    return false;
  }
  const foundTaskHead = getTaskHeadsStore().find(
    (taskHead) => taskHead.name === name
  );
  if (foundTaskHead) {
    return true;
  }
  return true;
}
