import { Routes } from '@angular/router';
import { QuizListComponent } from './pages/quiz-list/quiz-list';
import { QuizComponent } from './pages/quiz/quiz';
import { ResultComponent } from './pages/result/result';

export const routes: Routes = [
  { path: '', component: QuizListComponent },
  { path: 'quiz/:title', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: '' }
];
