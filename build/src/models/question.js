export class QuestionClass {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  checkCorrectAnswer(answer) {
    return answer === this.correctAnswer;
  }
}
