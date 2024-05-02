import { tooltipText as captionText } from './tooltipText'

function GraphPackaged({
    sidebarTitle, sidebar, graph, selectedGraph
}) {
    return <div className="App">
        <h1 className="text-3xl">
            Trends in Harvard Opinion Newspapers Sentiment Over Time
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

                <h4 className="px-12 mt-2 text-left">
                    {selectedGraph === 'graph1' ? captionText.HarvardOnlyGraph : captionText.AggregateGraph}
                </h4>
            </div>
        </div>
    </div>;
}


export default GraphPackaged;