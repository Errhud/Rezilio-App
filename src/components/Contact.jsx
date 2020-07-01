import React, { Component } from "react";
import AddContact from "./AddContact";
import GenderChart from "./GenderChart";

class Contact extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contactList:[{"fname":"John", "lname":"Doe", "phone":"222-2222", "gender":"Male"},  	//Some dummy contacts    
				{"fname":"Annette", "lname":"Dubois", "phone":"123-4567", "gender":"Female"},
				{"fname":"Dominic", "lname":"Tremblay", "phone":"717-7171", "gender":"Non-Binary"}],
			genderCount:[1, 1, 1]   // [Male, Female, Non-Binary], hard-coded to 1 only for demonstration
		}
		
		this.handleNewContact = this.handleNewContact.bind(this);	
	}
	
	//When the submit button is hit on adding a new contact, increments the gender count
	handleNewContact(newContact) {
		this.setState( lastState => ({
			contactList: [...lastState.contactList, newContact]
			}))
		if (newContact.gender === "Male") {
			this.state.genderCount[0] +=1;
		} else if (newContact.gender === "Female") {
			this.state.genderCount[1] +=1;
		} else {
			this.state.genderCount[2] +=1;
		}
		
	}
	
	//renders the contact list which is always visible.
	render() {
		const { isFetching } = this.state; //a failed attempt to avoid double rendering
		return(
			<div>
			{ isFetching ? (
				<div>Loading...</div>
			) : (
				<div>
					<ul className="contact-ul">
						{this.state.contactList.map(
							(contact) =>
								<li key={contact.phone} className="contact-li">
									<div className="contact">
										<span className="fname"> {contact.fname} </span>
										<span className="lname"> {contact.lname} </span>
										<span className="phone"> {contact.phone} </span>
										<span className="gender"> {contact.gender}</span>
									</div>
								</li>
						)}
					</ul>
					<br />
					<AddContact onSubmit= {this.handleNewContact} />
					<GenderChart genders={this.state.genderCount} />
				</div>
			)}
			</div>
		);
	}
}


export default Contact;