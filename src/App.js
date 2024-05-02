import React, { useState } from 'react';
import './App.css';
import Graph1Packaged from './Graph1Packaged';
import Graph2Packaged from './Graph2Packaged';
import { tooltipText as captionText } from './tooltipText'

function App() {
  // State to keep track of which graph to display
  const [selectedGraph, setSelectedGraph] = useState('graph1');
  const [tooltipText, setTooltipText] = useState(''); // State to keep track of tooltip text

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedGraph(event.target.value);
  };

  return (
    <div className="App">
      {/* Container for radio button toggles */}
      <div className="flex">
        {/* Toggle for Graph 1 */}
        <label className={`toggle-label ${selectedGraph === 'graph1' ? 'active' : ''}`}>
          <input
            type="radio"
            value="graph1"
            className='hidden'
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
            className='hidden'
            checked={selectedGraph === 'graph2'}
            onChange={handleRadioChange}
          />
          Graph 2
        </label>
      </div>
      {/* Conditional rendering of Graph components based on selectedGraph state */}
      {selectedGraph === 'graph1' ? <Graph1Packaged setTooltipText={setTooltipText} /> : <Graph2Packaged setTooltipText={setTooltipText} />}
      {/* {selectedGraph === 'graph1' ? <GraphCaption1 /> : <GraphCaption2 />} */}
      <h4 className="max-w-lg mx-auto text-gray-600 mt-2 text-left">
        {selectedGraph === 'graph1' ? captionText.HarvardOnlyGraph : captionText.AggregateGraph}
      </h4>
      {/* {tooltipText && <h4 className="max-w-lg mx-auto text-gray-600 mt-2 text-left">
        {tooltipText}
      </h4>} */}
    </div>
  );
}

export default App;
