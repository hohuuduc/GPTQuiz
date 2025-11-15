import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result';
import { Result } from '../../models/quiz.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.html',
  styleUrls: ['./result.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResultComponent implements OnInit {
  result: Result | undefined;

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.result = this.resultService.getResult();
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  }
}
