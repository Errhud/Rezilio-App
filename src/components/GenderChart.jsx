import React, { createRef, Component } from 'react';
import * as d3 from "d3";

export default class GenderChart extends Component {
	
	constructor(props){
		super(props);		
		
		this.state={
			isHidden:true,
			data:[{"Label":"Male", "value":this.props.genders[0]}, {"Label":"Female", "value":this.props.genders[1]}, {"Label":"Non-Binary", "value":this.props.genders[2]}]
		}
		this.showChart = this.showChart.bind(this);
		this.renderChart = this.renderChart.bind(this);
		this.hideChart = this.hideChart.bind(this);
		
	}
	
	
	showChart(){
		this.setState({isHidden:false})
		this.setState({data:[{"Label":"Male", "value":this.props.genders[0]}, {"Label":"Female", "value":this.props.genders[1]}, {"Label":"Non-Binary", "value":this.props.genders[2]}]})
		
	}
	
	hideChart(){
		this.setState({isHidden:true})
		d3.select("#genderChart").selectAll("svg").remove();
	}
	
	renderChart(){	

		// set the dimensions and margins of the graph
		var width = 450,
			height = 450,
			margin = 40

		var radius = Math.min(width, height) / 2 - margin

		
		var svg = d3.select("#genderChart")
		  .append("svg")
			.attr("width", width)
			.attr("height", height)
		  .append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		// Create dummy data
		var data = [this.state.data[0].value, this.state.data[1].value, this.state.data[2].value];
		var labels = [this.state.data[0].Label, this.state.data[1].Label, this.state.data[2].Label]

		// set the color scale
		var color = d3.scaleOrdinal()
		  .domain(data)
		  .range(d3.schemeSet2);

		// Compute the position of each group on the pie:
		var pie = d3.pie()
		  .value(function(d) {return d.value; })
		var data_ready = pie(d3.entries(data))
		// Now I know that group A goes from 0 degrees to x degrees and so on.

		// shape helper to build arcs:
		var arcGenerator = d3.arc()
		  .innerRadius(0)
		  .outerRadius(radius)

		// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
		svg
		  .selectAll('mySlices')
		  .data(data_ready)
		  .enter()
		  .append('path')
			.attr('d', arcGenerator)
			.attr('fill', function(d){ return(color(d.data.key)) })
			.attr("stroke", "black")
			.style("stroke-width", "2px")
			.style("opacity", 0.7)

		// Now add the annotation. Use the centroid method to get the best coordinates
		svg
		  .selectAll('mySlices')
		  .data(data_ready)
		  .enter()
		  .append('text')
		  .text(function(d, i){ return labels[i]})
		  .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
		  .style("text-anchor", "middle")
		  .style("font-size", 17)

		
		return (
			<div>
				<button type="submit" onClick={this.hideChart} className="btn gc-btn"> Hide Chart </button>
			</div>
		)
		
	}
	
	
	render() {
		const { isFetching } = this.state;
		return (
			<div>
				{ isFetching ? (
					<div>Loading...</div>
					) : (
					<div id="genderChart">
						{this.state.isHidden === false ? this.renderChart(): <button onClick={this.showChart} className="btn gc-btn"> Gender Chart </button> }
					</div>
				)}
			</div>
		
		)
	}
	
	
	
	
}
