import React from 'react';

const AddContactForm = ({onInputChange, onFormSubmit}) =>
	(
		<form>
			<div className="form">
				<label>First Name</label>
				<input type="name" name="fname" onChange={onInputChange} placeholder="First Name" />
			</div>
			
			<div className="form">
				<label>Last Name</label>
				<input type="name" name="lname" onChange={onInputChange} placeholder="Last Name" />
			</div>
			
			<div className="form">
				<label>Phone Number</label>
				<input type="tel" name="phone" onChange={onInputChange} placeholder="555-5555" />
			</div>
			
			<div className="form">
				<label>Gender</label>
				<input type="radio" value="Female" name="gender" onChange={onInputChange} /> Female
				<input type="radio" value="Male" name="gender" onChange={onInputChange} /> Male
				<input type="radio" value="Non-binary" name="gender" onChange={onInputChange} /> Non-Binary
			</div>
			
			<button type="submit" onClick={onFormSubmit} className="btn"> Submit </button>
		</form>
	)

export default AddContactForm;