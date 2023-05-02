import './App.css';
import Greet from './components/Greet.jsx';
import Welcome from './components/Welcome.jsx';

function App() {
  return (
    <div className="App">
      <Greet name="Ivan" />
      <Welcome />
    </div>
  );
}

export default App;
