import React, { useState, useEffect } from 'react';
// import Graph2CategoryRadioGroup from './AggregateSelection';
import Graph2 from './AggregateChart';
import GraphPackaged from './GraphPackaged';
import { formatCategoryName } from './HarvardOnlyChart'

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

    const types = ["Full Dataset", "elite_status", "university_type", "region"];

    return (
        <GraphPackaged
            sidebarTitle="Slice By:"
            sidebar={
                <div className="flex flex-col space-y-1" onChange={e => setSelectedType(e.target.value)}>
                    {types.map((category) => (
                        <div key={category} className='whitespace-nowrap'>
                            <input type="radio" id={category} name="type" value={category} checked={selectedType === category} />
                            <label className="ml-2" htmlFor={category}>{formatCategoryName(category)}</label>
                        </div>
                    ))}
                </div>
            }
            graph={<Graph2 type={selectedType} category={selectedCategory} />}
        />
    );
}

export default Graph2Packaged;
