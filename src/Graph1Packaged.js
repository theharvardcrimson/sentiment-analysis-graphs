import React, { useState } from 'react';
import './App.css';
import GraphPackaged from './GraphPackaged';
import Graph1, { formatCategoryName } from './HarvardOnlyChart';

function Graph1Packaged({
  setTooltipText
}) {
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
    "net_compassion_normalized": "#9b59b6", // Soft Purple
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


  return (
    <GraphPackaged
      sidebarTitle="Selected Topics:"
      categories={categories}
      checkedCategories={checkedCategories}
      handleCheckboxChange={handleCheckboxChange}
      categoryColors={categoryColors}
      sidebar={
        <div className='space-y-1'>
          {categories.map((category) => (
            <label key={category} className="flex items-center whitespace-nowrap">
              <input
                type="checkbox"
                checked={!!checkedCategories[category]}
                onChange={() => handleCheckboxChange(category)}
                className="mr-2" />
              {formatCategoryName(category)}
            </label>
          ))}
        </div>
      }
      graph={<Graph1 selectedCategories={checkedCategories} categoryColors={categoryColors} setTooltipText={setTooltipText} />}
    />
  );
}

export default Graph1Packaged;
