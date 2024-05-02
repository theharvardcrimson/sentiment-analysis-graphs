import React from 'react';

const GraphCaption2 = () => {
    const captionText = "Source: LexisNexis University Wire. Dataset consists of approximately 59,000 op-eds and editorials " +
                        "from September 20, 2000 to February 27, 2023. A stratified sample was calculated, with approximately " +
                        "25,000 observations. Approximately 300 university publications are represented. Elite universities are " +
                        "coded based on US News rankings and acceptance rates. Non-elite universities are all universities that are " +
                        "not elite. Universities are also categorized as public or private and by state and region. Scores are calculated " +
                        "using the Generalized Attribute Based Ratings Information Extraction Library, which returns values from one to 100. " +
                        "The sentiment scores are then renormalized between negative one and one. Missing years are represented by dashed lines.";

    return (
        <h4 className="text-sm text-gray-600 mt-2 text-left">{captionText}</h4>    );
};

export default GraphCaption2;
