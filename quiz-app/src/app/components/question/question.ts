import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/quiz.model';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.html',
  styleUrls: ['./question.css'],
  standalone: true,
  imports: [MatCardModule, MatRadioModule, CommonModule]
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() optionSelected = new EventEmitter<string>();

  onSelect(option: string) {
    this.optionSelected.emit(option);
  }
}
