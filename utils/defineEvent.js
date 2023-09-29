export const defineEvent = ({ el, event, eventFunc }) => {
  el.addEventListener(event, eventFunc);
};
