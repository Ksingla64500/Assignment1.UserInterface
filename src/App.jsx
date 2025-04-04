import { useState, useEffect } from 'react';
import Nav from './Nav';
import Scp from './Scp';
 
function App() {
  const [scps, setScps] = useState([]);
  const [selectedScp, setSelectedScp] = useState(null);
 
  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => setScps(data))
      .catch(error => console.error("Error loading data", error));
  }, []);
 
  return (
    <div>
      <h1>SCP Subjects</h1>
      {selectedScp ? <Scp scp={selectedScp} /> : <h2>Choose the SCP</h2>}
      <Nav scps={scps} onScpSelect={setSelectedScp} />
    </div>
  );
}
 
export default App;