import "./style.css";
import SideNav from "./uiComponents/sideNav/SideNav";
import mainContent from "./uiComponents/mainContent/mainContent";
import removeMainContent from "./uiComponents/mainContent/removeMainContent";
import sideNavEvents from "./events/sideNavEvents";
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/9379472a13.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);
document.body.appendChild(SideNav());
// const tasks = readTasks({ completed: false });
// console.log(tasks);
document.body.appendChild(
  mainContent({ completed: false, date: "today" }, "Today")
);

sideNavEvents();
