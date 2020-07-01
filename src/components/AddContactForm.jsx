import React from 'react';

const AddContactForm = ({onInputChange, onFormSubmit}) =>
	(
		<form>
			<div>
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
				
				<div className="form radio">
					<span>Gender</span>
					<label>
						<input type="radio" value="Female" name="gender" onChange={onInputChange} />
						<span></span>
						<span className="text"> Female </span>
					</label>
					<label>
						<input type="radio" value="Male" name="gender" onChange={onInputChange} />
						<span></span>
						<span className="text"> Male </span>
					</label>
					<label>
						<input type="radio" value="Non-Binary" name="gender" onChange={onInputChange}/>
						<span></span>
						<span className="text"> Non-Binary </span>
					</label>
				</div>
			</div>
			
			<button type="submit" onClick={onFormSubmit} className="btn ac-btn"> Submit </button>
		</form>
	)

export default AddContactForm;