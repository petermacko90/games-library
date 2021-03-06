import React, { Component, Fragment } from 'react';
import ProfileForm from './components/ProfileForm/ProfileForm';
import Games from './components/Games/Games';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Notification from './components/Notification/Notification';
import Spinner from './components/Spinner/Spinner';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: '',
      ownedGames: {},
      page: 0,
      notification: {
        show: false,
        text: ''
      },
      showSpinner: false
    };
  }

  hideNotification = () => {
    this.setState({ notification: { show: false, text: '' } });
  }

  showNotification = (text) => {
    this.setState({ notification: { show: true, text } });
  }

  setSpinner = (showSpinner) => {
    this.setState({ showSpinner });
  }

  onInputChange = (e) => {
    this.setState({ profile: e.target.value });
  }

  onPressEnter = (e) => {
    if (e.key === 'Enter' && this.state.profile) {
      this.onButtonSubmit();
    }
  }

  onButtonSubmit = () => {
    const { profile } = this.state;

    if (!profile) {
      this.showNotification('Empty SteamID!');
      return;
    }
    
    this.hideNotification();
    this.setSpinner(true);

    fetch(`https://gamesuggest-api.herokuapp.com/getownedgames/${profile}`, {
      method: 'get',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(data => {
        if (Object.keys(data.response).length === 0) {
          throw new Error('SteamID does not exist!');
        }
        this.setState({ ownedGames: data.response });
        this.setSpinner(false);
        this.resetPage();
      })
      .catch(error => {
        this.setState({ ownedGames: {} });
        this.setSpinner(false);
        this.showNotification('SteamID does not exist!');
        console.log(error);
      });
  }

  scrollToTop = () => {
    this.scrollTop.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'nearest'
    });
  }

  onPageChange = (e) => {
    this.setState({ page: e.target.value });
  }

  resetPage = () => {
    this.setState({ page: 0 });
  }

  render() {
    const { games } = this.state.ownedGames;
    const { profile, showSpinner, page } = this.state;
    const { text, show } = this.state.notification;

    return (
      <div className="helvetica">
        <div ref={(ref) => this.scrollTop = ref} />
        {
          show &&
            <Notification text={text} onClick={this.hideNotification} />
        }
        { showSpinner && <Spinner /> }
        <Header />
        <div className="body">
          <ProfileForm
            profile={profile}
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            onPressEnter={this.onPressEnter}
          />
          {
            games &&
              <Fragment>
                <Games
                  games={games}
                  profile={profile}
                  page={page}
                  changePage={this.onPageChange}
                  resetPage={this.resetPage}
                />
                <div
                  onClick={this.scrollToTop}
                  title="To top"
                  className="fa fa-chevron-circle-up fa-5x scroll fixed z-1 bottom-2-l right-2-l bottom-1-m right-1-m bottom-0 right-0 gold pointer"
                />
              </Fragment>
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
