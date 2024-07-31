import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/start" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
