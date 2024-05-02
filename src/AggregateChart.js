import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Graph2 = ({ type, category }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    // Function to determine data path based on selected type
    const getDataPath = () => {
      switch (type) {
        case 'elite_status':
          return `${process.env.PUBLIC_URL}/aggregates_elite_status - aggregates_elite_status.csv`;
        case 'region':
          return `${process.env.PUBLIC_URL}/aggregates_regions - aggregates_regions.csv`;
        case 'university_type':
          return `${process.env.PUBLIC_URL}/aggregates_university_type - aggregates_university_type.csv`;
        case 'Show All':
          return `${process.env.PUBLIC_URL}/aggregates_full - aggregates_full.csv`;
        default:
          return `${process.env.PUBLIC_URL}/aggregates_full - aggregates_full.csv`;
      }
    };

    const dataPath = getDataPath();
    // Load data from CSV file and parse it
    d3.csv(dataPath, d => ({
      year: new Date(d.year + '-01-01'),
      typeValue: d[type],
      categoryValue: +d[category]
    })).then(data => {
      // Check if data is available and container reference exists before drawing chart
      if (data.length > 0 && d3Container.current) {
        drawChart(data);
      }
    }).catch(error => {
      console.error("Error loading data:", error);
    });
  }, [type, category]);

  const drawChart = (data) => {
    // Remove any existing SVG elements
    d3.select(d3Container.current).selectAll("svg").remove();

    const margin = { top: 50, right: 30, bottom: 60, left: 60 },
        width = 800 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

    const svg = d3.select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Append x-axis title
    svg.append("text")
      .attr("class", "axis-title")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + 40)
      .text("Year");

    // Append y-axis title
    svg.append("text")
      .attr("class", "axis-title")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(${-margin.left / 2 - 10}, ${height / 2}) rotate(-90)`)
      .text("Sentiment");
    

    const x = d3.scaleTime().domain(d3.extent(data, d => d.year)).range([0, width]);

    // fixed range for y scale
    const yDomain = [0.1, 0.4];
    const y = d3.scaleLinear()
    .domain(yDomain) 
    .range([height, 0]);

    svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));

    const line = d3.line()
      .x(d => x(d.year))
      .y(d => y(d.categoryValue))
      .curve(d3.curveMonotoneX);

    const typeGroups = {
      'elite_status': ['elite', 'non-elite'],
      'region': ['midwest', 'northeast', 'south', 'west'],
      'university_type': ['private', 'public']
    };

    const colorKeyGroup = svg.append("g").attr("transform", `translate(0, -30)`);

    // Draw lines and color key based on selected type
    if (type === 'Show All') {
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line);
    } else if (typeGroups[type]) {
        typeGroups[type].forEach((typeName, index) => {
            const filteredData = data.filter(d => d.typeValue === typeName);
            svg.append("path")
                .datum(filteredData)
                .attr("fill", "none")
                .attr("stroke", d3.schemeTableau10[index % 10])
                .attr("stroke-width", 2)
                .attr("d", line);
    
            colorKeyGroup.append("rect")
                .attr("x", index * 120)
                .attr("width", 18)
                .attr("height", 18)
                .attr("fill", d3.schemeTableau10[index % 10]);
    
            colorKeyGroup.append("text")
                .attr("x", index * 120 + 22)
                .attr("y", 13)
                .text(typeName.charAt(0).toUpperCase() + typeName.slice(1))
                .style("font-size", "12px")
                .attr("fill", d3.schemeTableau10[index % 10]);
        });
    }
  };

  return <div ref={d3Container} />;
};

export default Graph2;
