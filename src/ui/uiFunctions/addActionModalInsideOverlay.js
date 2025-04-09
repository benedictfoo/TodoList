import overlay from "../uiComponents/addTaskModal/overlay";

export default function (modal) {
  const overlayElement = overlay(modal);
  document.body.appendChild(overlayElement);
  return overlayElement;
}
