import LogError from "./LogError.js";

export default function (date) {
  if (date) {
    if (date < Date.now()) {
      LogError("Date cannot be earlier than current date");
      return false;
    }
  }
  return true;
}
