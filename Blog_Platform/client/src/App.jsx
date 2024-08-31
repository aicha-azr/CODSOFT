import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import 'global';
function App() {
  if (typeof global === 'undefined') {
    window.global = window;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/signin' element={<LoginPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/newPost' element={<NewPostPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
