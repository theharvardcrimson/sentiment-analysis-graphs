import { tooltipText as captionText } from './tooltipText'

function GraphPackaged({
    sidebarTitle, sidebar, graph, selectedGraph
}) {
    return <div>
        <h1 className="text-3xl">
            {selectedGraph === 'graph1' ? "Progressive Sentiment in The Crimson’s Opinion Section" : "Progressive Sentiment in University Newspaper Opinion Articles"}
        </h1>

        <div className="flex space-x-4 justify-center mt-8">
            {/* Checkbox side */}
            <div className="flex flex-col items-start">
                <h4 className='text-xl mb-2 mt-4 whitespace-nowrap'>{sidebarTitle}</h4>
                {sidebar}
            </div>

            {/* Graph side */}
            <div className="flex flex-col w-min">
                {graph}

                <h4 className="px-12 mt-2 text-sm text-left">
                    {selectedGraph === 'graph1' ? captionText.HarvardOnlyGraph : captionText.AggregateGraph}
                </h4>
            </div>
        </div>
    </div>;
}


export default GraphPackaged;