import { Quiz, RenderUI } from './models'
import { questions } from './questions/single_question'
import { nextQuestion } from './views'

const main = () => {
  const quiz = new Quiz(questions)
  const render = new RenderUI()
  nextQuestion(quiz, render)
}

document.addEventListener('DOMContentLoaded', main)
