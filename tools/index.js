/*
import a, { b, c } from "./my-js02.js";
import Person, { data } from "./person.js";

export { Person, data, a, b, c};
*/

export { default as Person, data } from "./person.js"; //default 匯出麻煩點就是要自己重新命名
export { default as a, b, c } from "./my-js02.js";
