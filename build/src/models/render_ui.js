import {$} from "../utils/select_dom.js";
export class RenderUI {
  renderQuestion(questionContent) {
    $(".question-score").innerHTML = "";
    $(".question-title").innerHTML = questionContent;
  }
  renderAnswers(answers) {
    let answersContent = "";
    Object.entries(answers).forEach(([key, value]) => {
      answersContent += `
        <button class="btn-primary" data-value="${key}">
          ${value}
        </button>
      `;
    });
    $(".container-answers").innerHTML = answersContent;
  }
  renderIndex(currentIndex, totalQuestion) {
    $(".questions-of").innerText = `
      Question ${currentIndex + 1} of ${totalQuestion}
    `;
  }
  renderScore(score, totalQuestion) {
    $(".question-title").innerText = "";
    $(".container-answers").innerText = "";
    $(".questions-of").innerText = "";
    $(".question-score").innerHTML = `  
      <h1 class="score">Your score is: ${score}</h1>
      <i class="score-icon">
        ${score === totalQuestion ? "🎉" : "😣"}
      </i>
      <button class="btn-primary" style="margin-top: 15px; width: 100%">Try again</button>
    `;
  }
}
