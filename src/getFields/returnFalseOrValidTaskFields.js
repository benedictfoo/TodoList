import LogError from "../logging/LogError.js";
import { getProjectsFromStore } from "../store/ProjectStore.js";
export default function (input = null, options = { titleRequired: true }) {
  // check if no input
  if (!input) {
    LogError("No task given for saving");
    return false;
  }

  const { title, date, description, priority, projectId, completed } = input;

  // title Check
  if (!title && options.titleRequired) {
    LogError("Title is required");
    return false;
  }
  if (title && title.length > 500) {
    LogError("Title cannot be greater than 500");
    return false;
  }

  // date check
  if (date && isNaN(new Date(date).getTime())) {
    LogError("Date is invalid");
    return false;
  }

  // check description
  if (description && description.length > 16000) {
    LogError("Description cannot be longer than 16000 characters");
    return false;
  }

  // check priority
  // Priority cannot be zero and zero is falsy so take care
  if (priority !== undefined && (priority > 4 || priority < 1)) {
    LogError("Priority must be from an integer from 1 to 4.");
    return false;
  }

  // check if id(projectId) is found in projectStore.
  // take care of zeroth id!
  if (projectId !== undefined) {
    const foundProject = getProjectsFromStore().find(
      (project) => project.id === projectId
    );

    if (!foundProject) {
      LogError("Something went wrong. Project not found.");
      return false;
    }
  }

  // return the fields
  return { title, date, description, priority, projectId, completed };
}
