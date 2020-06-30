import React, { Component } from 'react';

export default class GenderChart extends Component {
	
	constructor(props){
		super(props);
		
		this.state={
			isHidden:true,
			genderCount:this.props.genderCount
		}
		this.showChart = this.showChart.bind(this);
		this.renderChart = this.renderChart.bind(this);
		this.hideChart = this.hideChart.bind(this);
	}
	
	
	showChart(){
		this.setState({isHidden:false})
		
	}
	
	hideChart(){
		this.setState({isHidden:true})
	}
	
	renderChart(){
		return (
			<div>
				<script src="https://d3js.org/d3.v4.js"></script>
				<script type="text/javascript">
					var w=300					//width
					h=300						//height
					r=100						//radius
					
					var svg = d3.select("#genderChart")
						.append("svg")
						.attr("width", width)
						.attr("height", height)
						.append("g")
						.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
						
					var data= [Male:this.state.genderCount[0], Female:this.state.genderCount[1], Non-Binary:this.state.genderCount[2]]
					
					var color = d3.scaleOrdinal()
					  .domain(data)
					  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
					  
					  
					var pie = d3.pie()
					  .value(function(d) return d.value; )
					var data_ready = pie(d3.entries(data))
					
					svg
					  .selectAll('whatever')
					  .data(data_ready)
					  .enter()
					  .append('path')
					  .attr('d', d3.arc()
						.innerRadius(0)
						.outerRadius(radius)
					  )
					  .attr('fill', function(d) return(color(d.data.key)) )
					  .attr("stroke", "black")
					  .style("stroke-width", "2px")
					  .style("opacity", 0.7)

				</script>
				
				<button type="submit" onClick={this.hideChart} className="btn"> Hide Chart </button>
			</div>
		
		)
		
	}
	
	render() {
		return (
			<div>
				{this.state.isHidden === false ? this.renderChart(): <button onClick={this.showChart} className="btn"> Gender Chart </button> }
			</div>
		)
	}
	
	
	
	
}