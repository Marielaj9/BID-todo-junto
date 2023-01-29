
import './App.css';

import DoeJane from './components/DoeJane';
import FillmoreMillard from './components/FillmoreMillard';
import SmithJohn from './components/SmithJohn';
import SmithMaria from './components/SmithMaria';

function App() {
  return (
    <div className="App">
      <DoeJane   HairColor = "Black"/>
      <SmithJohn  HairColor = "Brown" />
      <FillmoreMillard  HairColor = "Brown" />
      <SmithMaria   HairColor = "Brown"/>
    </div>
  );
}

export default App;
