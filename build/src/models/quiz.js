import {$, $$} from "../utils/select_dom.js";
export class Quiz {
  constructor(questions) {
    this.questionIndex = 0;
    this.score = 0;
    this.questions = questions;
  }
  getCurrentQuestion() {
    return this.questions[this.questionIndex];
  }
  guessAnswer(answer) {
    if (this.getCurrentQuestion().checkCorrectAnswer(answer)) {
      $(`[data-value=${answer}]`).style.background = "#0fd493";
      this.score++;
    } else {
      $(`[data-value=${answer}]`).style.background = "#e74c4c";
    }
    this.questionIndex++;
  }
  isFinished() {
    return this.questions.length === this.questionIndex;
  }
  selectAnswer(callback) {
    $$(".btn-primary").forEach((btn) => {
      const value = btn.getAttribute("data-value");
      btn.onclick = () => callback(value);
    });
  }
  tryAgain(callback) {
    $(".btn-primary").onclick = () => callback();
  }
}
