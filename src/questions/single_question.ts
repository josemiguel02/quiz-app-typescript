import { QuestionClass } from '../models'
import { allQuestions } from './all_questions'

export const questions = allQuestions.map(item => {
  const { question, answers, correctAnswer } = item
  return new QuestionClass(question, answers, correctAnswer)
})
