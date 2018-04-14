import React, { Component } from 'react';
import ProfileForm from './components/ProfileForm/ProfileForm';
import Games from './components/Games/Games';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: '',
      ownedGames: {}
    };
  }

  getOwnedGames = (data) => {
    this.setState({ownedGames: data});
  }

  setProfile = (data) => {
    this.setState({profile: data});
  }

  render() {
    const {games} = this.state.ownedGames;
    const {profile} = this.state;

    return (
      <div className="helvetica">
        <header className="bg-navy gold">
          <h1 className="f1 tc ma0 pa3">Games Library</h1>
        </header>
        <ProfileForm
          getOwnedGames={this.getOwnedGames}
          setProfile={this.setProfile}
        />
        {
          profile &&
            <Games games={games} profile={profile} />
        }
      </div>
    );
  }
}

export default App;