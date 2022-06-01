import {QuestionClass} from "../models/index.js";
import {allQuestions} from "./all_questions.js";
export const questions = allQuestions.map((item) => {
  const {question, answers, correctAnswer} = item;
  return new QuestionClass(question, answers, correctAnswer);
});
