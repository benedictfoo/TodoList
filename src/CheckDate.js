import LogError from "./LogError.js";

export default function (taskObject) {
  if (taskObject.date) {
    if (taskObject.date < Date.now()) {
      console.log(taskObject.date, Date.now());

      LogError("Date cannot be earlier than current date");
      return false;
    } else {
      return true;
    }
  }
}
