import { taskCreateOptionalClasses } from "../../../appVariables/classes";
import createElement from "../../uiFunctions/createElement";
import { date } from "./date";
import { priority } from "./priority";

export const optionals = createElement("div", {}, date, priority);
