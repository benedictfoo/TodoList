import { v4 as uuidv4 } from "uuid";

export default function ({
  title,
  description = null,
  id = uuidv4(),
  date = Date.now(),
  priority = 4,
  completed = false,
  projectId = null,
}) {
  return {
    title,
    description,
    id,
    date,
    priority,
    completed,
    projectId,
  };
}
