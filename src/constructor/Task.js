export default function ({
  title,
  description = null,
  id = uuidv4(),
  date = null,
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
