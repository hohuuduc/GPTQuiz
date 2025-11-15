import { Injectable } from '@angular/core';
import { Quiz, Question } from '../models/quiz.model';

function createMegaQuiz(): Quiz {
  const questions: Question[] = [];
  for (let i = 0; i < 100; i++) {
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
    });
  }

  return {
    title: 'Mega Quiz 100 Câu',
    questions: questions,
  };
}


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
          options: ['A framework', 'A library', 'A language', 'A database'],
          correctAnswer: 'A framework'
        },
        {
          questionText: 'Which company developed Angular?',
          options: ['Facebook', 'Google', 'Microsoft', 'Apple'],
          correctAnswer: 'Google'
        },
        {
          questionText: 'What is the command to create a new Angular project?',
          options: ['ng create', 'ng new', 'ng generate app', 'new angular'],
          correctAnswer: 'ng new'
        },
        {
          questionText: 'What are components in Angular?',
          options: ['The basic building blocks of an Angular application', 'Data models', 'Services for backend communication', 'Styling files'],
          correctAnswer: 'The basic building blocks of an Angular application'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        },
        {
          questionText: 'Which file is the main entry point for an Angular application?',
          options: ['index.html', 'app.component.ts', 'main.ts', 'angular.json'],
          correctAnswer: 'main.ts'
        }
      ]
    },
    {
      title: 'TypeScript Basics',
      questions: [
        {
          questionText: 'What is TypeScript?',
          options: ['A superset of JavaScript', 'A new language unrelated to JavaScript', 'A database query language', 'A CSS preprocessor'],
          correctAnswer: 'A superset of JavaScript'
        },
        {
          questionText: 'Does TypeScript compile to plain JavaScript?',
          options: ['Yes', 'No'],
          correctAnswer: 'Yes'
        },
        {
          questionText: 'How do you define a variable with a specific type in TypeScript?',
          options: ['let name: string = "John";', 'string name = "John";', 'let name = "John" as string;', 'variable name(string) = "John";'],
          correctAnswer: 'let name: string = "John";'
        },
        {
          questionText: 'What is an interface in TypeScript?',
          options: ['A way to define a contract for an object\'s shape', 'A class that cannot be instantiated', 'A type of loop', 'A function for DOM manipulation'],
          correctAnswer: 'A way to define a contract for an object\'s shape'
        },
        {
          questionText: 'What is an interface in TypeScript?',
          options: ['A way to define a contract for an object\'s shape', 'A class that cannot be instantiated', 'A type of loop', 'A function for DOM manipulation'],
          correctAnswer: 'A way to define a contract for an object\'s shape'
        },
        {
          questionText: 'What is an interface in TypeScript?',
          options: ['A way to define a contract for an object\'s shape', 'A class that cannot be instantiated', 'A type of loop', 'A function for DOM manipulation'],
          correctAnswer: 'A way to define a contract for an object\'s shape'
        }
      ]
    },
    {
      title: 'Kiến thức Tổng hợp',
      questions: [
        {
          questionText: 'Thủ đô của Việt Nam là gì?',
          options: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng'],
          correctAnswer: 'Hà Nội'
        },
        {
          questionText: 'Hành tinh nào gần Mặt Trời nhất?',
          options: ['Sao Thủy', 'Sao Kim', 'Sao Hỏa', 'Trái Đất'],
          correctAnswer: 'Sao Thủy'
        },
        {
          questionText: 'Ai là người viết "Bình Ngô Đại Cáo"?',
          options: ['Nguyễn Trãi', 'Nguyễn Du', 'Hồ Chí Minh', 'Trần Hưng Đạo'],
          correctAnswer: 'Nguyễn Trãi'
        },
        {
          questionText: 'Đỉnh núi cao nhất thế giới là gì?',
          options: ['Everest', 'K2', 'Fansipan', 'Kangchenjunga'],
          correctAnswer: 'Everest'
        },
        {
          questionText: 'Sông nào dài nhất Việt Nam?',
          options: ['Sông Đồng Nai', 'Sông Hồng', 'Sông Cửu Long', 'Sông Mã'],
          correctAnswer: 'Sông Đồng Nai'
        }
      ]
    },
    createMegaQuiz()
  ];

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  getQuiz(title: string): Quiz | undefined {
    return this.quizzes.find(quiz => quiz.title === title);
  }
}
