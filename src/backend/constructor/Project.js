import { v4 as uuidv4 } from "uuid";
const defaultColor = "DimGray";
export const acceptableColors = [
  "Crimson", // For urgent tasks (Red)
  "DarkOrange", // For medium priority tasks (Orange)
  "Gold", // For upcoming tasks or attention (Yellow)
  "MediumSeaGreen", // For completed tasks (Green)
  "SteelBlue", // For in-progress tasks (Blue)
  "SlateBlue", // For creative or special tasks (Purple)
  "HotPink", // For tasks requiring input or feedback (Pink)
  defaultColor,
];
export default function ({
  name,
  color = defaultColor,
  favorited = false,
  id = uuidv4(),
}) {
  return { name, color, favorited, id };
}
