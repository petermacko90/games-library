import React, { Component } from 'react';
import ProfileForm from './components/ProfileForm/ProfileForm';
import Games from './components/Games/Games';
import Notification from './components/Notification/Notification';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: '',
      ownedGames: {},
      notification: {
        show: false,
        text: ''
      },
      showSpinner: false
    };
  }

  hideNotification = () => {
    this.setState({notification: {
      show: false,
      text: ''
    }});
  }

  onInputChange = (event) => {
    this.setState({profile: event.target.value});
  }

  onPressEnter = (e) => {
    if (e.key === 'Enter' && this.state.profile) {
      this.onButtonSubmit();
    }
  }

  onButtonSubmit = () => {
    const { profile } = this.state;
    
    this.hideNotification();

    if (!profile) {
      this.setState({notification: {
        show: true,
        text: 'Empty SteamID!'
      }});
      return;
    }

    this.setState({showSpinner: true});

    fetch('https://gamesuggest-api.herokuapp.com/getownedgames', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        profile: profile
      })
    })
      .then(response => response.json())
      .then(data => {
        if (Object.keys(data.response).length === 0) {
          throw new Error('SteamID does not exist!');
        }
        this.setState({ownedGames: data.response});
        this.setState({showSpinner: false});
      })
      .catch(error => {
        this.setState({notification: {
          show: true,
          text: 'SteamID does not exist!'
        }});
        this.setState({ ownedGames: {} });
        this.setState({showSpinner: false});
      }); 
  }

  render() {
    const {games} = this.state.ownedGames;
    const {profile, showSpinner} = this.state;
    const {text, show} = this.state.notification;

    return (
      <div className="helvetica">
        {
          show &&
            <Notification text={text} onClick={this.hideNotification} />
        }
        { showSpinner && <Spinner /> }
        <header className="bg-navy gold">
          <h1 className="f1-l f2-m f3 tc ma0 pa3">Games Library</h1>
        </header>
        <ProfileForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          onPressEnter={this.onPressEnter}
        />
        { games && <Games games={games} profile={profile} /> }
      </div>
    );
  }
}

export default App;