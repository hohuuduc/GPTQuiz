import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/quiz.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.html',
  styleUrls: ['./question.css'],
  standalone: true,
  imports: [CommonModule]
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() questionIndex!: number;
  @Input() isMarkedForReview: boolean = false;
  @Output() optionSelected = new EventEmitter<{ questionIndex: number, option: string }>();
  @Output() markForReview = new EventEmitter<{ questionIndex: number, isMarked: boolean }>();

  onSelect(option: string) {
    this.optionSelected.emit({ questionIndex: this.questionIndex, option: option });
  }

  toggleMarkForReview() {
    this.isMarkedForReview = !this.isMarkedForReview;
    this.markForReview.emit({ questionIndex: this.questionIndex, isMarked: this.isMarkedForReview });
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }
}
