import { Answers, Question } from '../interfaces'
import { $ } from '../utils/select_dom'

export class QuestionClass implements Question {
  question: string
  answers: Answers
  correctAnswer: string

  constructor(question: string, answers: Answers, correctAnswer: string) {
    this.question = question
    this.answers = answers
    this.correctAnswer = correctAnswer
  }

  checkCorrectAnswer(answer: string): boolean {
    return answer === this.correctAnswer
  }
}
