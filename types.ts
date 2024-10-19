export interface User {
  id: string;
  name: string;
  interests: string[];
  completedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface Quiz {
  id: string;
  courseId: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface UserProgress {
  userId: string;
  courseId: string;
  progress: number;
  quizScores: { [quizId: string]: number };
}
