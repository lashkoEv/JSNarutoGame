<<<<<<< HEAD
export const render = (component, distPoint) => {
    return distPoint.append(component);
}
=======
import { isArray } from "../utils";

export const render = (node, children) => {
  [...node.children].forEach((child) => {
    child.remove();
  });

  if (!isArray(children)) return node.append(children);

  for (const child of children) node.append(child);
};
>>>>>>> dev
