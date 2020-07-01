import React, { Component } from 'react';
import AddContactForm from '../components/AddContactForm';

export default class AddContact extends Component {
	
	constructor(props){
		super(props);
		
		this.state ={
			isHidden:true,
			newContact: {
				fname:'',
				lname:'',
				phone:'',
				gender:''
			}
		}
		this.showAddContactBox = this.showAddContactBox.bind(this);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
			
		
	}
	
	showAddContactBox() {
		this.setState({isHidden:false})
	}
	
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		this.setState(lastState => (
			{
				newContact: {
					...lastState.newContact, [name]: value
				}
			})
	)}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.newContact);
		this.setState({isHidden:true});
	}
	
	renderForm() {
		return(
			<div>
				<AddContactForm onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
			</div>
		)
	}
	render() {
		const { isFetching } = this.state;
		return(
			<div>
			{ isFetching ? (
				<div>Loading...</div>
			) : (
				<div>
					{this.state.isHidden === false ? this.renderForm(): <button onClick={this.showAddContactBox} className="btn ac-btn"> Add Contact </button> }
				</div>
			)}
			</div>
		)
		
	}
	
	
}