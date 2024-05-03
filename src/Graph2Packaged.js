import React, { useState } from 'react';
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

    // eslint-disable-next-line no-unused-vars
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedType, setSelectedType] = useState("Full Dataset");

    const types = ["Full Dataset", "elite_status", "university_type", "region"];

    return (
        <GraphPackaged
        sidebarTitle="Slice By:"
        sidebar={
            <div className="flex flex-col items-start space-y-1" onChange={e => setSelectedType(e.target.value)}>
                {types.map((category) => (
                    <div key={category} className="whitespace-nowrap flex items-center">
                        <input type="radio" id={category} name="type" value={category} checked={selectedType === category} />
                        <label className="ml-2" htmlFor={category}>{formatCategoryName(category)}</label>
                    </div>
                ))}
            </div>
        }
        selectedGraph={'graph2'}
        graph={<Graph2 type={selectedType} category={selectedCategory} />}
        />
    );
}

export default Graph2Packaged;
