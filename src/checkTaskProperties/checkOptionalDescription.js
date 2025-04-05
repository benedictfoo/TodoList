import LogError from "../LogError.js";

export default function (description) {
  if (description) {
    if (description.length > 16000) {
      LogError("Description cannot be longer than 16000 characters");
      return false;
    }
  }
  return true;
}
