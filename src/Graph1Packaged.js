import React, { useState } from 'react';
import './App.css';
import Graph1 from './HarvardOnlyChart';

function Graph1Packaged() {
  // Array of sentiment categories
  const categories = [
    "wokeness_index_normalized",
    "net_social_justice_normalized",
    "net_racial_diversity_normalized",
    "net_womens_rights_normalized",
    "net_gay_rights_normalized",
    "net_activism_normalized",
    "net_capitalism_normalized",
    "net_administration_normalized",
    "net_compassion_normalized"
  ];

  // Object mapping sentiment categories to color codes
  const categoryColors = {
    "net_social_justice_normalized": "#1f77b4",
    "net_racial_diversity_normalized": "#ff7f0e",
    "net_womens_rights_normalized": "#2ca02c",
    "net_gay_rights_normalized": "#9467bd",
    "net_activism_normalized": "#8c564b",
    "net_capitalism_normalized": "#e377c2",
    "net_administration_normalized": "#7f7f7f",
    "net_compassion_normalized": "#17becf",
    "wokeness_index_normalized": "#d62728"
  };

  // State to keep track of selected categories
  const [checkedCategories, setCheckedCategories] = useState({
    "wokeness_index_normalized": true, 
  });

  // Function to toggle selected category
  const handleCheckboxChange = (category) => {
    setCheckedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  // Function to format category name for display
  const formatCategoryName = (name) => {
    if (name === "wokeness_index_normalized") {
      return "Aggregate Index";
    } else {
      return name.replace(/_/g, ' ')
                 .replace('normalized', '')
                 .replace(/^net /i, '')
                 .split(' ')
                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                 .join(' ')
                 .trim();
    }
  };
  

  return (
    <div className="App">
      {/* Header */}
      <h1> Trends in Harvard Opinion Newspapers Sentiment Over Time </h1>
      {/* Selected Topics label */}
      <h4 style={{ textAlign: 'left' }}>Selected Topics:</h4>
      {/* Checkbox container */}
      <div className="checkbox-container">
        {/* Iterate over categories */}
        {categories.map((category) => (
          <label key={category}>
            {/* Checkbox for each category */}
            <input
              type="checkbox"
              checked={!!checkedCategories[category]}
              onChange={() => handleCheckboxChange(category)}
            />
            {/* Display formatted category name */}
            {formatCategoryName(category)}
          </label>
        ))}
      </div>
      {/* Render Graph1 component with selected categories and color codes */}
      <Graph1 selectedCategories={checkedCategories} categoryColors={categoryColors} />
    </div>
  );
}

export default Graph1Packaged;
