import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: Quiz[] = [
    {
      title: 'Angular Basics',
      questions: [
        {
          questionText: 'What is Angular?',
          options: ['A framework', 'A library', 'A language'],
          correctAnswer: 'A framework'
        },
        {
          questionText: 'Which company developed Angular?',
          options: ['Facebook', 'Google', 'Microsoft'],
          correctAnswer: 'Google'
        }
      ]
    },
    {
      title: 'TypeScript Basics',
      questions: [
        {
          questionText: 'What is TypeScript?',
          options: ['A superset of JavaScript', 'A new language', 'A database'],
          correctAnswer: 'A superset of JavaScript'
        },
        {
          questionText: 'Does TypeScript compile to JavaScript?',
          options: ['Yes', 'No'],
          correctAnswer: 'Yes'
        }
      ]
    }
  ];

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  getQuiz(title: string): Quiz | undefined {
    return this.quizzes.find(quiz => quiz.title === title);
  }
}
