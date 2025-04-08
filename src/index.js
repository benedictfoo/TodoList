import "./style.css";
import SideNav from "./uiComponents/sideNav/SideNav";
import readTasks from "./uiReadFunctions/readTasks";

const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/9379472a13.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);
document.body.appendChild(SideNav());
const tasks = readTasks({
  completed: true,
  id: "60b5a424-28e9-4094-b757-cde51f383502",
});
