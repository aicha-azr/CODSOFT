import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/signin' element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
