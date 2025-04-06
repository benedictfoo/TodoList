import { v4 as uuidv4 } from "uuid";
export default function ({
  name,
  color = "DimGray",
  favorited = false,
  id = uuidv4(),
}) {
  return { name, color, favorited, id };
}
