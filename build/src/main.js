import {Quiz, RenderUI} from "./models/index.js";
import {questions} from "./questions/single_question.js";
import {nextQuestion} from "./views/index.js";
const main = () => {
  const quiz = new Quiz(questions);
  const render = new RenderUI();
  nextQuestion(quiz, render);
};
document.addEventListener("DOMContentLoaded", main);
