import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import GenreForm from './components/genre';
import Summary from './components/summary';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<GenreForm />} />
          <Route path="/summary/:id" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;