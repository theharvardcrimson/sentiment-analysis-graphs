export const tooltipText = {
    'HarvardOnlyGraph': <>
        Source: <a href="https://www.thecrimson.com/section/opinion/">The Harvard Crimson</a>.
        Dataset consists of approximately 8,700 op-eds, staff editorials, and columns from September 19, 2001 to April 18, 2024.
        Scores are calculated using the <a href="https://github.com/elliottmokski/GABRIEL-distribution/blob/main/README.md">Generalized Attribute Based Ratings Information Extraction Library</a>,
        which returns values from one to 100. The sentiment scores are then renormalized between negative one and one. Missing years are represented by dashed lines.
    </>,
    'AggregateGraph': <>
        Source: <a href="https://signin.lexisnexis.com/lnaccess/app/signin?back=https%3A%2F%2Fadvance.lexis.com%3A443%2Fnexis-uni%2Flaapi%2Fresearch%2Fhome%3Fcontext%3D1516831%26primaryipauth%3Dtrue&aci=nu">LexisNexis University Wire</a>.
        Dataset consists of approximately 59,000 op-eds and editorials from September 20, 2000 to February 27, 2023. A stratified sample was calculated, with approximately 25,000 observations.
        Approximately 300 university publications are represented.
        Elite universities are coded based on US News rankings and acceptance rates.
        Non-elite universities are all universities that are not elite.
        Universities are also categorized as public or private and by state and region.
        Scores are calculated using the <a href="https://github.com/elliottmokski/GABRIEL-distribution/blob/main/README.md">Generalized Attribute Based Ratings Information Extraction Library</a>,
        which returns values from one to 100. The sentiment scores are then renormalized between negative one and one. Missing years are represented by dashed lines.
    </>,
    'Social Justice': <>
        The “social justice” attribute evaluates the extent to which an opinion article or collection of opinion articles expresses support for social and political rights, privileges, and opportunities in society. A high rating is awarded to opinion articles that intensively support social change. For example, articles advocating for voting rights reforms, affordable higher education, or expanded healthcare coverage would all receive high ratings. A medium rating applies to opinion articles with moderate views on these issues or those that mention them only in passing. Opinion articles receive a low or zero rating if they barely discuss these issues.
    </>,
    'Racial Diversity': <>
        The “racial diversity” attribute evaluates the extent to which an opinion article or collection of opinion articles emphasizes racial inequality, racism, and the experiences of racial minorities. A high rating is given to opinion articles that aggressively emphasize the importance of racial diversity. For example, articles that support affirmative action, advocate for a more ethnically diverse student body or faculty, or decry instances of racism on campus would all receive high ratings. A medium rating applies to opinion articles with moderate views on these issues or those that mention them only in passing. Opinion articles receive a low or zero rating if they barely discuss these issues.
    </>,
    "Women's Rights": <>
        The “women’s rights” attribute evaluates the extent to which an opinion article or collection of opinion articles expresses support for women’s rights and feminism. A high rating is awarded to opinion articles that intensively support women and gender diversity. For example, articles that advocate for solutions to sexual harassment or to gender discrimination would all receive high ratings. A medium rating applies to opinion articles with moderate views on these issues or those that mention them only in passing. Opinion articles receive a low or zero rating if they barely discuss these issues.
    </>,
    'Gay Rights': <>
        The “gay rights” attribute evaluates the extent to which an opinion article or collection of opinion articles expresses support for gay rights, lesbian rights, queer rights, or transgender rights. A high rating is given to opinion articles that have strong opinions supporting gay rights. For example, opinion articles that support same sex marriage would receive high ratings. A medium rating applies to opinion articles with moderate views on these issues or those that mention them only in passing. Opinion articles receive a low or zero rating if they barely discuss these issues.
    </>,
    'Activism': <>
        The “activism” attribute evaluates the extent to which an opinion article or collection of opinion articles emphasizes activism and advocacy of either students or workers. A high rating is given to opinion articles that have strong opinions supporting activism and advocacy. For example, articles that support unions, protests, riots, demonstrations, strikes or rallies would all receive high ratings. A medium rating applies to opinion articles with moderate views on these issues or those that mention them only in passing. Opinion articles receive a low or zero rating if they barely discuss these issues.
    </>,
    'Anticapitalism': <>
        The “anticapitalism” attribute evaluates the extent to which an opinion article or collection of opinion articles opposes or criticizes capitalism, the free market, free trade, libertarian ideals, corporate business, the stock market, or the financial system. A high rating is given to articles that have strong opinions opposing capitalism. For example, opinion articles that oppose big business or encourage students to avoid careers in finance would all receive high ratings. A medium rating applies to opinion articles with moderate views on these issues or those that mention them only in passing. Opinion articles receive a low or zero rating if they barely discuss these issues.
    </>,
    "Administration": <>
        The “administration” attribute evaluates the extent to which an opinion article or collection of opinion articles supports the university administration or a policy that the university has implemented or will implement. A high rating is given to opinion articles that strongly support the university administration or the university policy. A medium rating applies to opinion articles that express only moderate support for the university administration or a university policy. Opinion articles receive a low or zero rating if they barely discuss the university administration or university administration policies.
    </>,
    "Compassion": <>
        The “compassion” attribute evaluates the extent to which an opinion article exhibits empathy, understanding, and concern for the suffering or well-being of others. A high rating is given to articles that have a strong tone of compassion, empathy, care, and support. For example, articles that feature narratives that highlight personal stories and struggles would receive high ratings. A medium rating is given to articles where the tone of compassion, empathy, care, and support is present but less strong. The rating declines to low or zero when articles lack a compassionate tone and express a tone of indifference to or detachment from societal issues. This assessment also considers how effectively the article uses language that is inclusive, nurturing, and aimed at fostering understanding and support among readers.
    </>
};
