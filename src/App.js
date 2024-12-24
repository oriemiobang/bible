import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';

import Footer from './components/Footer';
import Login from './pages/Login';

import DailyText from './pages/DailyText';
import BookMark from './pages/BookMark';
function App() {
  return (
    <div className="App flex dark:text-white justify-center flex-col items-center dark:bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<HomePage/>}></Route>
          <Route path = '/signup' element = {<SignUp/>}></Route>
          <Route path = '/login' element = {<Login/>}></Route>
          <Route path = '/dailyText' element = {<DailyText/>}></Route>
          <Route path = '/bookMark' element = {<BookMark/>}></Route>
        </Routes>
      </BrowserRouter>
    
      <Footer/>
     
    </div>
  );
}

export default App;
