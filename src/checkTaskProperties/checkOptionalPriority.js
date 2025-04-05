import LogError from "../LogError.js";

export default function (priority) {
  if (priority !== undefined) {
    if (priority > 4 || priority < 1) {
      LogError("Priority must be from an integer from 1 to 4.");
      return false;
    }
  }
  return true;
}
