export default function createElement(tag, attributes = {}, ...children) {
  // Create a new element
  const element = document.createElement(tag);

  // Set attributes on the element
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  // Append children elements or text content
  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child)); // Text node
    } else if (!child) {
    } else {
      element.appendChild(child); // DOM elements or other nodes
    }
  });

  return element;
}
