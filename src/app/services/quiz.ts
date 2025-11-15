import { Injectable } from '@angular/core';
import { Quiz, Question } from '../models/quiz.model';

function createMegaQuiz(num: number): Quiz {
  const questions: Question[] = [];
  for (let i = 0; i < num; i++) {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    const correctAnswer = num1 + num2;

    const options = new Set<string>();
    options.add(correctAnswer.toString());

    while (options.size < 4) {
      const wrongAnswer = correctAnswer + Math.floor(Math.random() * 20) - 10;
      if (wrongAnswer !== correctAnswer) {
        options.add(wrongAnswer.toString());
      }
    }

    const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);

    questions.push({
      questionText: `Câu ${i + 1}: ${num1} + ${num2} = ?`,
      options: shuffledOptions,
      correctAnswer: correctAnswer.toString(),
      score: Math.floor(Math.random() * 10)
    });
  }

  return {
    title: `Mega Quiz ${num} Câu`,
    questions: questions,
  };
}


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: Quiz[] = [
    createMegaQuiz(6),
    createMegaQuiz(100)
  ];

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  getQuiz(title: string): Quiz | undefined {
    return this.quizzes.find(quiz => quiz.title === title);
  }
}
