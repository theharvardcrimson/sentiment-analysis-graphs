import React, { useState, useEffect } from 'react';
import Graph2CategoryRadioGroup from './AggregateSelection';
import Graph2 from './AggregateChart';

function Graph2Packaged() {
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

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedType, setSelectedType] = useState("Full Dataset");

    // useEffect(() => {
    //     console.log("Selected Type:", selectedType);
    //     console.log("Selected Category:", selectedCategory);
    // }, [selectedType, selectedCategory]);

    return (
        <div className='flex flex-col items-center'>
            <h1 className="text-3xl">
                Trends in College Opinion Newspapers Sentiment Over Time
            </h1>
            <div className='flex'>
            <Graph2CategoryRadioGroup
                categories={categories}
                types={["Full Dataset", "elite_status", "university_type", "region"]}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <Graph2 type={selectedType} category={selectedCategory} />
            </div>
        </div>
    );
}

export default Graph2Packaged;
