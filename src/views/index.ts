import { Quiz, RenderUI } from '../models'
import { questions } from '../questions/single_question'

export const nextQuestion = (quiz: Quiz, render: RenderUI) => {
  if (!quiz.isFinished()) {
    const { renderQuestion, renderAnswers, renderIndex } = render
    const { question, answers } = quiz.getCurrentQuestion()
    renderQuestion(question)
    renderAnswers(answers)
    renderIndex(quiz.questionIndex, quiz.questions.length)

    quiz.selectAnswer((value: string) => {
      quiz.guessAnswer(value)
      nextQuestion(quiz, render)
    })

    return
  }

  render.renderScore(quiz.score, quiz.questions.length)
  quiz.tryAgain(() => {
    nextQuestion(new Quiz(questions), new RenderUI())
  })
}
