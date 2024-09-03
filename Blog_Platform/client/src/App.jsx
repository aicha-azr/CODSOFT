import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import 'global';
import MyPostsPage from './pages/MyPostsPage';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/Post';
import Test from './pages/Test';
import UpdatePostPage from './pages/UpdatePostPage';
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
        <Route path='/myPosts' element={<MyPostsPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/posts/:id' element={<PostPage/>} />
        <Route path='/posts/update/:id' element={<UpdatePostPage/>} />
        <Route path='/test' element={<Test/>} />

      </Routes>
    </Router>
  );
}

export default App;
