import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz, Question } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz';
import { ResultService } from '../../services/result';
import { TimerComponent } from '../../components/timer/timer';
import { QuestionComponent } from '../../components/question/question';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css'],
  standalone: true,
  imports: [TimerComponent, QuestionComponent, MatButtonModule, CommonModule]
})
export class QuizComponent implements OnInit {
  quiz: Quiz | undefined;
  currentQuestionIndex: number = 0;
  userAnswers: { [key: number]: string } = {};
  startTime: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private resultService: ResultService
  ) {}

  ngOnInit() {
    this.startTime = Date.now();
    const quizTitle = this.route.snapshot.paramMap.get('title');
    if (quizTitle) {
      this.quiz = this.quizService.getQuiz(quizTitle);
    }
  }

  get currentQuestion(): Question | undefined {
    return this.quiz?.questions[this.currentQuestionIndex];
  }

  onOptionSelected(option: string) {
    this.userAnswers[this.currentQuestionIndex] = option;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < (this.quiz?.questions.length || 0) - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitQuiz() {
    const timeTaken = Math.floor((Date.now() - this.startTime) / 1000);
    let score = 0;
    this.quiz?.questions.forEach((question, index) => {
      if (this.userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });

    this.resultService.setResult({
      score: score,
      timeTaken: timeTaken,
      totalQuestions: this.quiz?.questions.length || 0
    });

    this.router.navigate(['/result']);
  }

  handleTimeUp() {
    this.submitQuiz();
  }
}
