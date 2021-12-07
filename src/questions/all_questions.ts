import { Question } from '../interfaces'

export const allQuestions: Array<Question> = [
  {
    question: 'Who invented VueJS?',
    answers: {
      a: 'Evan You',
      b: 'Douglas Crockford',
      c: 'Mitchell Baker',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Who invented JavaScript?',
    answers: {
      a: 'Douglas Crockford',
      b: 'Sheryl Sandberg',
      c: 'Brendan Eich',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Which one of these is a JavaScript package manager?',
    answers: {
      a: 'Node.JS',
      b: 'TypeScript',
      c: 'Npm',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Which tool can you use to ensure code quality?',
    answers: {
      a: 'Angular',
      b: 'JQuery',
      c: 'RequireJS',
      d: 'ESLint',
    },
    correctAnswer: 'd',
  },
  {
    question: 'Which company invented ReactJS?',
    answers: {
      a: 'Google',
      b: 'Facebook',
      c: 'Microsoft',
      d: 'Amazon',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Which language is object oriented?',
    answers: {
      a: 'Pascal',
      b: 'Cobol',
      c: 'Java',
    },
    correctAnswer: 'c',
  },
]
