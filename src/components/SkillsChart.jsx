// SkillsChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SkillsChart = ({ skills }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 300;
        svg.attr('width', width).attr('height', height);

        // Set up scales
        const xScale = d3.scaleBand()
            .domain(skills.map(skill => skill.name))
            .range([0, width])
            .padding(0.2);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(skills, skill => skill.level)])
            .range([height, 0]);

        // Add bars
        svg.selectAll('.bar')
            .data(skills)
            .join('rect')
            .attr('class', 'bar')
            .attr('x', skill => xScale(skill.name))
            .attr('y', skill => yScale(skill.level))
            .attr('width', xScale.bandwidth())
            .attr('height', skill => height - yScale(skill.level))
            .attr('fill', '#0f0');

        // Add x-axis
        svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end");

        // Add y-axis
        svg.append('g').call(d3.axisLeft(yScale));
    }, [skills]);

    return <svg ref={svgRef}></svg>;
};

export default SkillsChart;
