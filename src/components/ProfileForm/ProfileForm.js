import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';

const ProfileForm = ({ onInputChange, onButtonSubmit, onPressEnter }) => {

	return (
		<div className="mw6 center mt4">
			<div className="form">
				<input
					className="w-60-ns w-100 pa1 ba b--yellow yellow bg-dark-blue"
					type="text"
					placeholder="SteamID"
					name="profile"
					onChange={onInputChange}
					onKeyPress={onPressEnter}
					autoFocus="autofocus"
				/>
				<button
					onClick={onButtonSubmit}
					className="games w-40-ns w-100 ba b--yellow yellow bg-dark-blue hover-dark-blue bg-animate hover-bg-yellow pa1 pointer">
					<i className="fa fa-steam-square"></i> Get games
				</button>
			</div>
		</div>
	);
	
}

export default ProfileForm;