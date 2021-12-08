export interface Answers {
  a: string
  b: string
  c: string
  d?: string
}

export interface Question {
  question: string
  answers: Answers
  correctAnswer: string
  checkCorrectAnswer?: (answer: string) => boolean
}

export interface QuizInterface {
  questions: Array<Question>
  questionIndex: number
  score: number
  getCurrentQuestion: () => void
  guessAnswer: (answer: string) => void
  isFinished: () => boolean
  selectAnswer: (callback: (value: string) => void) => void
  tryAgain: (callback: () => void) => void
}
