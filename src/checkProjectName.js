import LogError from "./LogError.js";

export default function (name) {
  if (!name) {
    LogError("Project name is required");
    return false;
  } else if (name.length > 120) {
    LogError("Name cannot be more than 120 characters");
    return false;
  }
  return true;
}
