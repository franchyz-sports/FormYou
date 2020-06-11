import React from 'react';

const StudentForm = () => {
		const submit = (event) => {
		// event.preventDefault();
		// const user = profile.id;
		// const username = document.getElementById('username').value;
		// const description = document.getElementById('description').value;
		// dispatch(API.profileUpdate(user, username, description));
	};
	
	return (
		<form onSubmit={submit}>
			<div className='form-row'>
				<div className='form-group col-md-2'>
					<label>Gender</label>
					<select className='custom-select mr-sm-2'>
						<option selected>Choose...</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
				</div>
				<div className='form-group col-md-5'>
					<label>First name</label>
					<input id='first_name' type='text' className='form-control' placeholder={''} />
				</div>
				<div className='form-group col-md-5'>
					<label>Last name</label>
					<input id='last_name' type='text' className='form-control' placeholder={''} />
				</div>
			</div>
			<div className='form-row'>
				<div className='form-group col-md-3'>
					<label>Birthdate</label>
					<input id='birthdate' type='date' className='form-control' placeholder={''} />
				</div>
				<div className='form-group col-md-9'>
					<label>Email</label>
					<input id='email' type='email' className='form-control' placeholder={''} />
				</div>
			</div>
			<div className='form-row'>
				<div className='form-group col-md-6'>
					<label>Password</label>
					<input id='password' type='text' className='form-control' placeholder={''} />
				</div>
				<div className='form-group col-md-6'>
					<label>Password Confirmation</label>
					<input id='password_confirmation' type='text' className='form-control' placeholder={''} />
				</div>
			</div>
			<div className='form-group'>
				<label>Address</label>
				<input id= 'address' type='text' className='form-control' placeholder={''} />
			</div>
			<div className='form-row'>
				<div className='form-group col-md-6'>
					<label>City</label>
					<input id='city' type='text' className='form-control' />
				</div>
				<div className='form-group col-md-6'>
					<label>Zip</label>
					<input id='zip_code' type='text' className='form-control' />
				</div>
			</div>
			<div className='form-row'>
				<div className='form-group col-md-6'>
						<label>Company</label>
						<select className='custom-select mr-sm-2'>
							<option selected>Choose...</option>
							<option value='list of companies'>Index Companies...</option>
						</select>
					</div>
					<div className='form-group col-md-6'>
						<label>Studies</label>
						<input id='studies' type='text' className='form-control' placeholder={''} />
				</div>
			</div>
			<div className='form-row'>
				<div className='form-group col-md-6'>
					<label>Last profile update :</label>
					<p className='form-control'>{''}</p>
				</div>
				<div className='form-group col-md-6'>
					<label>Member since :</label>
					<p className='form-control'>{''}</p>
				</div>
			</div>
			<button className='btn btn-primary mr-3' type='submit'>Confirm changes</button>
		</form>
	);
};

export default StudentForm;
