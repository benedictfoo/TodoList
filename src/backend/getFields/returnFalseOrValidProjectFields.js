import LogError from "../../logging/LogError.js";

import { acceptableColors } from "../constructor/Project.js";
export default function (input = null) {
  // check if no input
  if (!input) {
    LogError("No project given for saving.");
    return false;
  }

  const { name, color, favorited = false } = input;
  // check name
  if (!name) {
    LogError("Project name is missing.");
    return false;
  } else if (name.length > 120) {
    LogError("Project name cannot be larger than 120 characters.");
    return false;
  }

  // check color
  if (!acceptableColors.includes(color)) {
    LogError("Invalid Color");
    return false;
  }

  // check favorited
  if (typeof favorited !== "boolean") {
    LogError("Something went wrong");
    return false;
  }
  // Return valid fields
  return { name, color, favorited };
}
