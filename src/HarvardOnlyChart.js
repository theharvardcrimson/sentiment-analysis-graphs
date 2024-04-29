import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Graph1 = ({ selectedCategories, categoryColors }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    const dataPath = `${process.env.PUBLIC_URL}/aggregates_harvard - aggregates_harvard.csv`;
    d3.csv(dataPath, d => {
      const parsedData = {
        year: new Date(+d.year, 0)
      };
      Object.keys(d).forEach(key => {
        if (key !== 'year') {
          parsedData[key] = +d[key];
        }
      });
      return parsedData;
    }).then(data => {
      if (data.length > 0 && d3Container.current) {
        drawChart(data);
      }
    }).catch(error => {
      console.error("Error loading data:", error);
    });
  }, [selectedCategories, categoryColors]);

  const drawChart = (data) => {
    d3.select(d3Container.current).selectAll("svg").remove();
  
    const margin = { top: 60, right: 30, bottom: 60, left: 60 },
      width = 800 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
  
    const svg = d3.select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
    const x = d3.scaleTime().domain(d3.extent(data, d => d.year)).range([0, width]);
    const y = d3.scaleLinear().domain([-0.5, 0.5]).range([height, 0]);
  
    svg.append("text")
      .attr("class", "axis-title")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + 40)
      .text("Year");
  
    svg.append("text")
      .attr("class", "axis-title")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(${-margin.left / 2 - 10}, ${height / 2}) rotate(-90)`)
      .text("Sentiment");
  
    svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
  
    Object.keys(selectedCategories).forEach((category, index) => {
      if (selectedCategories[category]) {
        const line = d3.line()
          .x(d => x(d.year))
          .y(d => y(d[category]))
          .curve(d3.curveMonotoneX);
  
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", categoryColors[category])
          .attr("stroke-width", 2)
          .attr("d", line);
  
        const legendWidth = 150;
        let offsetX = 0, offsetY = 0;
        if (offsetX + legendWidth > width) {
          offsetX = 0;
          offsetY += 20;
        }
        const legend = svg.append("g")
          .attr("transform", `translate(${offsetX + 15},${-30 + offsetY})`);
        legend.append("rect")
          .attr("width", 10)
          .attr("height", 10)
          .attr("fill", categoryColors[category]);
        legend.append("text")
          .attr("x", 15)
          .attr("y", 10)
          .text(category.replace(/_/g, ' ').replace('normalized', '').replace(/^net /i, '').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '))
          .style("font-size", "12px")
          .attr("fill", categoryColors[category]);
        offsetX += legendWidth;
      }
    });
  };
  

  return <div ref={d3Container} />;
};

export default Graph1;
