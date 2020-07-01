import React, { Component } from "react";
import AddContact from "./AddContact";
import GenderChart from "./GenderChart";

class Contact extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contactList:[],
			genderCount:[0, 0, 0]   // [Male, Female, Non-Binary]
		}
		
		this.handleNewContact = this.handleNewContact.bind(this);
		
		
	}
	
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
	render() {
		const { isFetching } = this.state;
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
										<span> {contact.fname} </span>
										<span> {contact.lname} </span>
										<span> {contact.phone} </span>
										<span> {contact.gender}</span>
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