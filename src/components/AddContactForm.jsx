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
				<input type="number" name="phone" onChange={onInputChange} placeholder="555-5555" />
			</div>
			
			<div className="form">
				<label>Gender</label>
				<input type="radio" value="FEMALE" name="gender" onChange={onInputChange} /> Female
				<input type="radio" value="MALE" name="gender" onChange={onInputChange} /> Male
				<input type="radio" value="NONB" name="gender" onChange={onInputChange} /> Non-Binary
			</div>
			
			<button type="submit" onClick={onFormSubmit} class="btn"> Submit </button>
		</form>
	)

export default AddContactForm;