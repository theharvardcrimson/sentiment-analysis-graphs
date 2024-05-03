import React, { useState } from 'react';
import Graph1Packaged from './Graph1Packaged';
import Graph2Packaged from './Graph2Packaged';
// eslint-ignore no-unreachable

/**
 * @deprecated
 * Router switches between Graph1 and Graph2 automatically
 */
function App() {
  // State to keep track of which graph to display
  const [selectedGraph, setSelectedGraph] = useState('graph1');

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedGraph(event.target.value);
  };

  return selectedGraph === 'graph1'
    ? <Graph1Packaged />
    : <Graph2Packaged />;

  return (
    <div className="text-center p-4">
      {/* Container for radio button toggles */}
      <div className="h-screen flex items-center justify-center">
        {/* Toggle for Graph 1 */}
        {['graph1', 'graph2'].map((graph, index) => (
          <label key={index} className={`cursor-pointer px-2 py-1 rounded-lg ${selectedGraph === graph ? "bg-[#a82931] text-white" : ''}`}>
            <input
              type="radio"
              value={graph}
              className='hidden'
              checked={selectedGraph === graph}
              onChange={handleRadioChange}
            />
            {graph === 'graph1' ? 'Graph 1' : 'Graph 2'}
          </label>
        ))}
      </div>

      {/* Conditional rendering of Graph components based on selectedGraph state */}
      {selectedGraph === 'graph1'
        ? <Graph1Packaged />
        : <Graph2Packaged />}
      {/* {selectedGraph === 'graph1' ? <GraphCaption1 /> : <GraphCaption2 />} */}
      {/* {tooltipText && <h4 className="max-w-lg mx-auto text-gray-600 mt-2 text-left">
        {tooltipText}
      </h4>} */}
    </div>
  );
}

export default App;
