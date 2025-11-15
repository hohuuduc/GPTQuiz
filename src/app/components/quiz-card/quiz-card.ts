import { Component, Input } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.html',
  styleUrls: ['./quiz-card.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class QuizCardComponent {
  @Input() quiz!: Quiz;

  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/quiz', this.quiz.title]);
  }
}
