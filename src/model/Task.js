import { v4 as uuidv4 } from "uuid";

export default function ({
  description = null,
  parentId = null,
  priority = 4,
  date = Date.now(),
  id = uuidv4(),
  completed = false,
  tasks = null,
}) {
  return { description, parentId, priority, date, id, completed, tasks };
}
