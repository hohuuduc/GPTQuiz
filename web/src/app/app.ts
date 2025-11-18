import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz';
import { QuizListComponent } from './pages/quiz-list/quiz-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'quiz-app';
}
