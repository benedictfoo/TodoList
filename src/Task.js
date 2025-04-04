import { v4 as uuidv4 } from "uuid";
export default function (taskObject) {
  if (!taskObject.description) {
    taskObject.description = null;
  }
  if (!taskObject.parent) {
    taskObject.parent = null;
  }
  if (!taskObject.priority) {
    taskObject.priority = 4;
  }
  if (!taskObject.date) {
    taskObject.date = Date.now();
  }
  taskObject.id = uuidv4();
  taskObject.completed = false;
  taskObject.tasks = null;
  return taskObject;
}
