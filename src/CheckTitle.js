import LogError from "./LogError.js";
export default function (taskObject) {
  if (!taskObject?.title) {
    LogError("Title is required");
    return false;
  } else if (taskObject.title.length > 500) {
    LogError("Title cannot be greater than 500");
    return false;
  } else {
    return true;
  }
}
