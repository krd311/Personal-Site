import './App.css';
import Toolbar from './components/Toolbar';
import Home from './components/Home';
import Skills from './components/Skills';
import  Welcome  from './components/Welcome';

function App() {
  return (
    <div class='App'>
      <Toolbar/>
      {/* <Welcome/> */}
      <Home/>
    </div>
  );
}

export default App;
