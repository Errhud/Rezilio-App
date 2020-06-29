import React from 'react';

const AddContactForm = ({onInputChange, onFormSubmit}) =>
	(
		<form>
			<div className="form">
				<label>First Name</label>
				<input type="name" name="name" onChange={onInputChange} placeholder="First Name" />
			</div>
		</form>
	)

export default AddContactForm;