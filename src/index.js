import "./style.css";

import mainContent from "./ui/uiComponents/mainContent/mainContent";
import sideNavEvents from "./ui/events/sideNavEvents";
import SideNav from "./ui/uiComponents/sideNav/SideNav";
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
