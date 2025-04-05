import LogError from "../logging/LogError.js";
export default function (title) {
  if (!title) {
    LogError("Title is required");
    return false;
  } else if (title.length > 500) {
    LogError("Title cannot be greater than 500");
    return false;
  } else {
    return true;
  }
}
