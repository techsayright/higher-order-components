import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
     <ClickCounter name='darshan'/>
     <HoverCounter god='god'/>
    </div>
  );
}

export default App;
