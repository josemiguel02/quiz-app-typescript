export const $ = (selector: string) => {
  return document.querySelector(selector)! as HTMLElement
}
export const $$ = (selectors: string) => {
  return document.querySelectorAll(selectors)! as NodeListOf<HTMLElement>
}
