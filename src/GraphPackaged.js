function GraphPackaged({
    sidebarTitle, sidebar, graph
}) {
    return <div className="App">
        <h1 className="text-3xl">
            Trends in Harvard Opinion Newspapers Sentiment Over Time
        </h1>

        <div className="flex">
            {/* Checkbox side */}
            <div className="flex flex-col items-start p-4">
                <h4 className='text-xl mb-2 whitespace-nowrap'>{sidebarTitle}</h4>
                {sidebar}
            </div>

            {/* Graph side */}
            <div className="flex-grow p-4">
                {graph}
            </div>
        </div>
    </div>;
}


export default GraphPackaged;