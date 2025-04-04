import LogError from "./LogError.js";

export default function (date) {
  if (date) {
    if (isNaN(new Date(date).getTime())) {
      LogError("Date is invalid");
      return false;
    }
  }
  return true;
}
