import React from 'react';

const GraphCaption1 = () => {
    const captionText = "Source: The Harvard Crimson. Dataset consists of approximately 8,700 op-eds, staff editorials, " +
                        "and columns from September 19, 2001 to April 18, 2024. Scores are calculated using the Generalized " +
                        "Attribute Based Ratings Information Extraction Library, which returns values from one to 100. The " +
                        "sentiment scores are then renormalized between negative one and one. Missing years are represented " +
                        "by dashed lines.";

    return (
        <h4 className="text-sm text-gray-600 mt-2 text-left">{captionText}</h4>    );
};

export default GraphCaption1;
