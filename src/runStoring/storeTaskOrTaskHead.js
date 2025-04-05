import buildTaskTree from "../taskTreeFunctions/buildTaskTree.js";
import findSubTaskDepth from "../taskTreeFunctions/findSubTaskDepth.js";

export default function storeTaskOrTaskHead(Store, task) {
  Store.push(task);
}
