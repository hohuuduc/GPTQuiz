import { Injectable } from '@angular/core';
import { Result } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private result: Result | undefined;

  setResult(result: Result) {
    this.result = result;
  }

  getResult(): Result | undefined {
    return this.result;
  }
}
