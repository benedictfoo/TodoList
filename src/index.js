import "./style.css";
import {
  updateProjectByIdFromStore,
  getProjectsFromStore,
} from "./store/ProjectStore";

function component() {
  const element = document.createElement("div");
  updateProjectByIdFromStore("f24be39c-b029-4fac-8a8c-07f9d57b9a79", {
    name: "PROJECT ZERO",
    color: "HotPink",
    favorited: true,
  });
  console.log(getProjectsFromStore());
  return element;
}

document.body.appendChild(component());
