import "./style.css";
import SideNav from "./uiComponents/sideNav/SideNav";

const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/9379472a13.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);
document.body.appendChild(SideNav());
