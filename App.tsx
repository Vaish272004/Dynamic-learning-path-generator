import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import CourseRecommendation from './components/CourseRecommendation';
import ProgressDashboard from './components/ProgressDashboard';
import InteractiveQuiz from './components/InteractiveQuiz';
import { User, Course, UserProgress, Quiz } from './types';
import { GraduationCap } from 'lucide-react';

// Mock data
const initialUser: User = {
  id: '1',
  name: 'John Doe',
  interests: ['programming', 'data science'],
  completedCourses: ['course1'],
};

const courses: Course[] = [
  { id: 'course1', title: 'Introduction to Programming', description: 'Learn the basics of programming', level: 'beginner', tags: ['programming'] },
  { id: 'course2', title: 'Data Science Fundamentals', description: 'Explore the world of data science', level: 'intermediate', tags: ['data science'] },
  { id: 'course3', title: 'Advanced Machine Learning', description: 'Deep dive into machine learning algorithms', level: 'advanced', tags: ['data science', 'programming'] },
];

const initialProgress: UserProgress[] = [
  { userId: '1', courseId: 'course1', progress: 100, quizScores: { 'quiz1': 90 } },
  { userId: '1', courseId: 'course2', progress: 50, quizScores: { 'quiz2': 75 } },
];

const sampleQuiz: Quiz = {
  id: 'quiz1',
  courseId: 'course2',
  questions: [
    {
      question: 'What is the primary goal of data science?',
      options: [
        'To create visually appealing charts',
        'To extract insights and knowledge from data',
        'To write complex algorithms',
        'To build websites'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following is NOT a common step in the data science process?',
      options: [
        'Data collection',
        'Data cleaning',
        'Data analysis',
        'Data destruction'
      ],
      correctAnswer: 3
    }
  ]
};

function App() {
  const [user, setUser] = useState<User>(initialUser);
  const [progress, setProgress] = useState<UserProgress[]>(initialProgress);

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const handleQuizComplete = (score: number) => {
    const updatedProgress = progress.map(p => 
      p.userId === user.id && p.courseId === sampleQuiz.courseId
        ? { ...p, quizScores: { ...p.quizScores, [sampleQuiz.id]: score } }
        : p
    );
    setProgress(updatedProgress);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center">
          <GraduationCap className="mr-2" size={36} />
          Dynamic Learning Path Generator
        </h1>
      </header>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <UserProfile user={user} onUpdateUser={handleUpdateUser} />
        <CourseRecommendation user={user} courses={courses} />
        <ProgressDashboard user={user} progress={progress} />
        <InteractiveQuiz quiz={sampleQuiz} onQuizComplete={handleQuizComplete} />
      </div>
    </div>
  );
}

export default App;
