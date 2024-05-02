import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


// Function to format category name for display
export const formatCategoryName = (name) => {
  if (name === "wokeness_index_normalized") {
    return "Aggregate Index";
  }
  else if (name === "net_capitalism_normalized") {
    return "Anticaptialism";
  }
  else if (name === 'net_womens_rights_normalized') {
    return "Women's Rights"
  }
  else {
    return name.replace(/_/g, ' ')
      .replace('normalized', '')
      .replace(/^net /i, '')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .trim();
  }
};

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

    const margin = { top: 60, right: 30, bottom: 50, left: 60 }, // Increase left margin to accommodate legend
      width = 800 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;


    const svg = d3.select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime().domain(d3.extent(data, d => d.year)).range([0, width]);
    const y = d3.scaleLinear().domain([
      d3.min(Object.keys(selectedCategories).filter(c => selectedCategories[c]), category => d3.min(data, d => d[category])) - 0.03,
      d3.max(Object.keys(selectedCategories).filter(c => selectedCategories[c]), category => d3.max(data, d => d[category])) + 0.03
    ]).range([height, 0]);

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

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .attr('font-family', 'Georgia, serif');

    svg.append("g")
      .call(d3.axisLeft(y))
      .attr('font-family', 'Georgia, serif');



    const legendWidth = 150;
    let offsetX = 0, offsetY = 0;

    const missingData = [];
    const startYear = data[0].year.getFullYear();
    for (let year = startYear; year <= 2024; year += 1) {
      const prevYearData = data.find(d => d.year.getFullYear() === year - 1);
      const yearData = data.find(d => d.year.getFullYear() === year);
      if (prevYearData && !yearData) {
        missingData.push({ ...prevYearData });
      }
      if (!prevYearData && yearData && year > startYear) {
        missingData.push({ ...yearData });
      }
    }

    for (let year = startYear; year <= 2024; year += 1) {
      if (!data.find(d => d.year.getFullYear() === year)) {
        data.push({ year: new Date(year, 0) });
      }
    }

    data.sort((a, b) => a.year - b.year);

    Object.keys(selectedCategories).forEach((category, index) => {
      if (selectedCategories[category]) {
        console.log(data)
        const line = d3.line()
          .defined(d => d[category])
          .x(d => x(d.year))
          .y(d => y(d[category]))
          .curve(d3.curveMonotoneX);

        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", categoryColors[category])
          .attr("stroke-width", 2)
          .attr("d", line);

        // add missing data line
        svg.append("path")
          .datum(missingData)
          .attr("fill", "none")
          .attr("stroke", categoryColors[category])
          .attr("stroke-width", 2)
          .attr("stroke-dasharray", "5,5")
          .attr("d", line);

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
          .text(formatCategoryName(category))
          .style("font-size", "12px")
          .attr("fill", categoryColors[category]);

        offsetX += legendWidth;
      }
    });
  };


  return <div ref={d3Container} />;
};

export default Graph1;
