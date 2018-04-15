import React from 'react';
import Notification from '../Notification/Notification';

class ProfileForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: '',
			notification: {
				show: false,
				text: ''
			}
		}
	}

	onProfileChange = (event) => {
    this.setState({profile: event.target.value});
  }

  handleKeyPress = (e) => {
  	if (e.key === 'Enter') {
  		this.onSubmit();
  	}
  }

  hideNotification = () => {
  	this.setState({notification: {
      show: false,
      text: ''
    }});
  }

  onSubmit = () => {
  	const { profile } = this.state;
  	
  	this.hideNotification();

  	if (!profile) {
			this.setState({notification: {
        show: true,
        text: 'Empty SteamID!'
      }});
  		return;
  	}

  	fetch('https://gamesuggest-api.herokuapp.com/getownedgames', {
  		method: 'post',
  		headers: {'Content-Type': 'application/json'},
  		body: JSON.stringify({
  			profile: profile
  		})
  	})
  		.then(response => response.json())
  		.then(data => {
  			this.props.getOwnedGames(data.response);
  			this.props.setProfile(profile);
  		})
  		.catch(error => {
  			this.setState({notification: {
	        show: true,
	        text: 'SteamID does not exist!'
	      }});
  		});	
  }

	render() {
		const {text, show} = this.state.notification;

		return (
			<div className="mw6 center mt4">
				{
					show &&
						<Notification text={text} onClick={this.hideNotification} />
				}
				<div className="form">
					<input
						className="w-60-ns w-100 pa1 ba b--yellow yellow bg-dark-blue"
						type="text"
						placeholder="SteamID"
						name="profile"
						onChange={this.onProfileChange}
						onKeyPress={this.handleKeyPress}
						autoFocus="autofocus"
					/>
					<button
						onClick={this.onSubmit}
						className="games w-40-ns w-100 ba b--yellow yellow bg-dark-blue hover-dark-blue bg-animate hover-bg-yellow pa1 pointer">
						Get games
					</button>
				</div>
			</div>
		);
	}
}

export default ProfileForm;