import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnswerPage from './pages/AnswerPage';
import IndividualFeed from './pages/IndividualFeed';
import HomePage from './pages/HomePage';
import QuestionList from './pages/QuestionList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post/:id/answer" element={<AnswerPage />} />
        <Route path="/post/:id" element={<IndividualFeed />} />
        <Route path="/list" element={<QuestionList />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
