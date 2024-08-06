import './App.css';
import MainContent from './components/MainContent/mainContent';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <div className="parentDiv">
         <Navbar/>
         <MainContent/>
      </div>
    </div>
  );
}

export default App;
