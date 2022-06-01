export const $ = (selector) => {
  return document.querySelector(selector);
};
export const $$ = (selectors) => {
  return document.querySelectorAll(selectors);
};
