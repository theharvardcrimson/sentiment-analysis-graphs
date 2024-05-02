import React, { useState } from 'react';
import './App.css';
import Graph1 from './HarvardOnlyChart';

function Graph1Packaged() {
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

  const categoryColors = {
    "net_social_justice_normalized": "#004E6A", // Blue 1
    "net_racial_diversity_normalized": "#4DAAE9", // Blue 2
    "net_womens_rights_normalized": "#F99D1C", // Orange
    "net_gay_rights_normalized": "#218446", // Green
    "net_activism_normalized": "#A82931", // Crimson Red
    "net_capitalism_normalized": "#808285", // Crimson Dark Gray
    "net_administration_normalized": "#BCBEC0", // Crimson Gray
    "net_compassion_normalized": "#E6E7E8", // Crimson Light Gray
    "wokeness_index_normalized": "#000000" // Black
  };

  const [checkedCategories, setCheckedCategories] = useState({
    "wokeness_index_normalized": true,
  });

  const handleCheckboxChange = (category) => {
    setCheckedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const formatCategoryName = (name) => {
    if (name === "wokeness_index_normalized") {
      return "Aggregate Index";
    } else if (name === "net_capitalism_normalized") {
      return "Anticapitalism";
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
      <h1> Trends in Harvard Opinion Newspapers Sentiment Over Time </h1>
      <div className="flex">
        {/* Checkbox side */}
        <div className="flex flex-col items-start p-4">
          <h4 className="text-left mb-4">Selected Topics:</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={!!checkedCategories[category]}
                  onChange={() => handleCheckboxChange(category)}
                  className="mr-2"
                />
                {formatCategoryName(category)}
              </label>
            ))}
          </div>
        </div>

        {/* Graph side */}
        <div className="flex-grow p-4">
          <Graph1 selectedCategories={checkedCategories} categoryColors={categoryColors} />
        </div>
      </div>
    </div>
  );
}

export default Graph1Packaged;
