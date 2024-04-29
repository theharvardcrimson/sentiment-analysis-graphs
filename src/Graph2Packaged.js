import React, { useState, useEffect } from 'react';
import Dropdown from './AggregateSelection';
import Graph2 from './AggregateChart';

function Graph2Packaged() {
    const categories = [
        "net_social_justice_normalized",
        "net_racial_diversity_normalized",
        "net_womens_rights_normalized",
        "net_gay_rights_normalized",
        "net_activism_normalized",
        "net_capitalism_normalized",
        "net_administration_normalized",
        "net_compassion_normalized",
        "wokeness_index_normalized"
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedType, setSelectedType] = useState("Show All");
    
    useEffect(() => {
        console.log("Selected Type:", selectedType);
        console.log("Selected Category:", selectedCategory);
    }, [selectedType, selectedCategory]);

    return (
        <div>
            <h1> Trends in College Opinion Newspapers Sentiment Over Time </h1>
            <Dropdown 
                categories={categories}
                types={["Show All", "elite_status", "university_type", "region" ]}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <Graph2 type={selectedType} category={selectedCategory} />
        </div>
    );
}

export default Graph2Packaged;
