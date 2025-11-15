import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz';
import { QuizCardComponent } from '../../components/quiz-card/quiz-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.html',
  styleUrls: ['./quiz-list.css'],
  standalone: true,
  imports: [QuizCardComponent, CommonModule]
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizzes = this.quizService.getQuizzes();
  }
}
