const virtualDom = document.getElementById("custom__root");

function renderComponent({ type, childeren, attributes }) {
  const child = document.createElement(type);

  child.innerHTML = childeren;

  Object.keys(attributes).forEach((attribute) =>
    child.setAttribute(attribute, attributes[attribute])
  );

  virtualDom.appendChild(child);
}

renderComponent({
  type: "p",
  childeren: "jay mata di",
  attributes: {
    style: "color : white;",
  },
});
