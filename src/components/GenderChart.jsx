import React, { createRef, Component } from 'react';
import * as d3 from "d3";

export default class GenderChart extends Component {
	
	constructor(props){
		super(props);

		this.colors = d3.scaleOrdinal(d3.schemeCategory10);
		this.format = d3.format(".2f");
		
		this.state={
			isHidden:true,
			data:[
			{label:'Male', value:this.props.genders[0]},
			{label:'Female', value:this.props.genders[1]},
			{label:'Non-Binary', value:this.props.genders[2]}]
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
	
	slice(props) {
		let {pie} = props;
		
		let arc = d3.arc()
			.innerRadius(0)
			.outerRadius(100);
		
		let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");
		
		return pie.map((slice, index) => {
			let sliceColor = interpolate(index / (pie.length -1));
			return <path d={arc(slice)} fill={sliceColor} />;
		});
	};
	
	renderChart(){
		
		const width=300;
		const height=300;
		
		let pie = d3.pie()(this.state.data);
		console.log(this.state.data);
		
		
		
		return (
			<div>
				<svg height={height} width={width}>
					<g transform={'translate(${width / 2},${height / 2})'}>
						<slice pie={pie} />
					</g>
				</svg>
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
