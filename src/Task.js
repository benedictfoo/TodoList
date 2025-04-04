export default function (taskObject) {
  if (!taskObject.description) {
    taskObject.description = null;
  }
  if (!taskObject.parent) {
    taskObject.parent = null;
  }
  if (!taskObject.priority) {
    taskObject.priority = false;
  }
  if (!taskObject.date) {
    taskObject.date = Date.now();
  }
  taskObject.completed = false;
  taskObject.tasks = null;
  return taskObject;
}
