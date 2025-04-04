import checkProjectName from "./checkProjectName.js";
import Project from "./Project.js";

export default function makeProject(projectObject) {
  if (!projectObject) {
    LogError("No project given for saving");
    return;
  }
  if (checkProjectName(projectObject.name)) {
    return Project(projectObject);
  }
}

console.log(makeProject({ name: "Dad stuff" }));
