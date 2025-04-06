import { v4 as uuidv4 } from "uuid";

export default function ({
  title,
  description = null,
  id = uuidv4(),
  parentId = null,
  date = Date.now(),
  priority = 4,
  completed = false,
  tasks = null,
  taskHead = null,
}) {
  return {
    title,
    description,
    id,
    parentId,
    date,
    priority,
    completed,
    tasks,
    taskHead,
  };
}
