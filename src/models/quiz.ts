import { Question, QuizInterface } from '../interfaces'
import { $, $$ } from '../utils/select_dom'
import { QuestionClass } from './'

export class Quiz implements QuizInterface {
  questions: Array<Question>
  questionIndex = 0
  score = 0

  constructor(questions: Array<Question>) {
    this.questions = questions
  }

  getCurrentQuestion() {
    return this.questions[this.questionIndex] as QuestionClass
  }

  guessAnswer(answer: string) {
    if (this.getCurrentQuestion().checkCorrectAnswer(answer)) {
      $(`[data-value=${answer}]`).style.background = '#0fd493'
      this.score++
    } else {
      $(`[data-value=${answer}]`).style.background = '#e74c4c'
    }

    this.questionIndex++
  }

  isFinished(): boolean {
    return this.questions.length === this.questionIndex
  }

  selectAnswer(callback: Function) {
    $$('.btn-primary').forEach(btn => {
      const value: string = btn.getAttribute('data-value')!
      btn.onclick = () => callback(value)
    })
  }

  tryAgain(callback: Function) {
    $('.btn-primary').onclick = () => callback()
  }
}
