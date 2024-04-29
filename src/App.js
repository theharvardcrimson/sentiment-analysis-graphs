import React, { useState } from 'react';
import './App.css';
import Graph1Packaged from './Graph1Packaged';
import Graph2Packaged from './Graph2Packaged';

function App() {
  // State to keep track of which graph to display
  const [selectedGraph, setSelectedGraph] = useState('graph1');

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedGraph(event.target.value);
  };

  return (
    <div className="App">
      {/* Container for radio button toggles */}
      <div className="toggle-container">
        {/* Toggle for Graph 1 */}
        <label className={`toggle-label ${selectedGraph === 'graph1' ? 'active' : ''}`}>
          <input 
            type="radio" 
            value="graph1" 
            checked={selectedGraph === 'graph1'} 
            onChange={handleRadioChange} 
          />
          Graph 1
        </label>
        {/* Toggle for Graph 2 */}
        <label className={`toggle-label ${selectedGraph === 'graph2' ? 'active' : ''}`}>
          <input 
            type="radio" 
            value="graph2" 
            checked={selectedGraph === 'graph2'} 
            onChange={handleRadioChange} 
          />
          Graph 2
        </label>
      </div>
      {/* Conditional rendering of Graph components based on selectedGraph state */}
      {selectedGraph === 'graph1' ? <Graph1Packaged /> : <Graph2Packaged />}
    </div>
  );
}

export default App;
