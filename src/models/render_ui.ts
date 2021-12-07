import { Answers } from '../interfaces'
import { $ } from '../utils/select_dom'

export class RenderUI {
  
  renderQuestion(questionContent: string) {
    $('.question-score').innerHTML = ''
    $('.question-title').innerHTML = questionContent
  }

  renderAnswers(answers: Answers) {
    let answersContent = ''
    Object.entries(answers).forEach(([key, value]) => {
      answersContent += `
        <button class="btn-primary" data-value="${key}">
          ${value}
        </button>
      `
    })

    $('.container-answers').innerHTML = answersContent
  }

  renderIndex(currentIndex: number, totalQuestion: number) {
    $('.questions-of').innerText = `
      Question ${currentIndex + 1} of ${totalQuestion}
    `
  }

  renderScore(score: number, totalQuestion: number) {
    $('.question-title').innerText = ''
    $('.container-answers').innerText = ''
    $('.questions-of').innerText = ''

    $('.question-score').innerHTML = `  
      <h1 class="score">Your score is: ${score}</h1>
      <i class="score-icon">
        ${score === totalQuestion ? '🎉' : '😣'}
      </i>
      <button class="btn-primary" style="margin-top: 15px; width: 100%">Try again</button>
    `
  }
}
