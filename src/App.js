
import './App.css';
import HomePage from './pages/HomePage';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App flex justify-center flex-col items-center ">
      <HomePage/>
      <BottomBar/>
      <Footer/>
     
    </div>
  );
}

export default App;
