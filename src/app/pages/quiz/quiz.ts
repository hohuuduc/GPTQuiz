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
  templateUrl: 'quiz.html',
  styleUrls: ['quiz.css'],
  standalone: true,
  imports: [TimerComponent, QuestionComponent, MatButtonModule, CommonModule]
})
export class QuizComponent implements OnInit {
  quiz: Quiz | undefined;
  userAnswers: { [key: number]: string } = {};
  startTime: number = 0;
  endTime: number = 0;
  progress: number = 0;
  answeredQuestions: number = 0;
  currentQuestionIndex: number = 0;
  totalScore: number = 0;
  markedForReview: boolean[] = [];

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
      if (this.quiz) {
        this.endTime = this.startTime + (this.quiz.questions.length * 60 * 1000);
        this.totalScore = this.quiz.questions.reduce((acc, q) => acc + q.score, 0);
        this.markedForReview = new Array(this.quiz.questions.length).fill(false);
      }
    }
  }

  onOptionSelected(payload: { questionIndex: number, option: string }) {
    this.userAnswers[payload.questionIndex] = payload.option;
    this.updateProgress();
  }

  onMarkForReview(payload: { questionIndex: number, isMarked: boolean }) {
    this.markedForReview[payload.questionIndex] = payload.isMarked;
  }

  updateProgress() {
    const answeredCount = Object.keys(this.userAnswers).length;
    this.answeredQuestions = answeredCount;
    this.progress = (answeredCount / (this.quiz?.questions.length || 1)) * 100;
  }

  isAnswered(questionIndex: number): boolean {
    return this.userAnswers.hasOwnProperty(questionIndex);
  }

  scrollToQuestion(questionId: string) {
    const element = document.getElementById(questionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.currentQuestionIndex = parseInt(questionId.replace('q', ''));
    }
  }

  submitQuiz() {
    const timeTaken = Math.floor((Date.now() - this.startTime) / 1000);
    let score = 0;
    this.quiz?.questions.forEach((question, index) => {
      if (this.userAnswers[index] === question.correctAnswer) {
        score += question.score;
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
