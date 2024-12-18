import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import PlayerPage from './PlayerPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PlayerPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
