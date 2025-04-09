import createElement from "../../uiFunctions/createElement";
export default function (classes, name) {
  const heading = createElement("span", { class: classes }, name);
  return heading;
}
