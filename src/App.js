import './App.css';
import Main from './components/Main/Main';
import Other from './components/other/Other';
import Sidebar from './components/Side bar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="gridContainer">
          <Sidebar />
         <Main />
         <Other />
      </div>
    </div>
  );
}

export default App;
