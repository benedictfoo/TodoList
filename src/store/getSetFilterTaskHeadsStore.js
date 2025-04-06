const acceptableColors = [
  "Crimson", // For urgent tasks (Red)
  "DarkOrange", // For medium priority tasks (Orange)
  "Gold", // For upcoming tasks or attention (Yellow)
  "MediumSeaGreen", // For completed tasks (Green)
  "SteelBlue", // For in-progress tasks (Blue)
  "SlateBlue", // For creative or special tasks (Purple)
  "HotPink", // For tasks requiring input or feedback (Pink)
  "DimGray",
];
let store = [];
export function getTaskHeadsStore() {
  return store;
}
export function setTaskHeadsStore(taskHead) {
  store.push(taskHead);
}
export function filterTaskHeadsStore(callback) {
  store.filter(callback);
}
