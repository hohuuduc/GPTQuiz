export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
  score: number;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export interface Result {
  score: number;
  timeTaken: number;
  totalQuestions: number;
}
