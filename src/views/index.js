import {Quiz, RenderUI} from "../models/index.js";
import {questions} from "../questions/single_question.js";
export const nextQuestion = (quiz, render) => {
  if (!quiz.isFinished()) {
    const {renderQuestion, renderAnswers, renderIndex} = render;
    const {question, answers} = quiz.getCurrentQuestion();
    renderQuestion(question);
    renderAnswers(answers);
    renderIndex(quiz.questionIndex, quiz.questions.length);
    quiz.selectAnswer((value) => {
      quiz.guessAnswer(value);
      setTimeout(() => {
        nextQuestion(quiz, render);
      }, 550);
    });
    return;
  }
  render.renderScore(quiz.score, quiz.questions.length);
  quiz.tryAgain(() => {
    nextQuestion(new Quiz(questions), new RenderUI());
  });
};
