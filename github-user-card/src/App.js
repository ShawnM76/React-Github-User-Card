import React from 'react';
import logo from './logo.svg';
import Cardholder from './Components/CardHolder';
import FollowerCard from './Components/FollowerCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  fetchCards = () => {
    fetch('https://api.github.com/users/ShawnM76')
      .then(res => {
        return res.json();
      })
      .then(cards => {
        this.setState({ user: cards });
        console.log(cards);
      })
      .catch(error => {
        console.log('O no there is an Error', error);
      });
  };

  fetchFollowers = () => {
    fetch('https://api.github.com/users/ShawnM76/followers')
      .then(res => {
        return res.json();
      })
      .then(cards => {
        this.setState({ followers: cards });
        console.log(cards);
      })
      .catch(error => {
        console.log('O no there is an Error', error);
      });
  };

  componentDidMount() {
    this.fetchCards();
    this.fetchFollowers();
  }

  render() {
    console.log(this.state.user);
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='Me'>
            <Cardholder
              img={this.state.user.avatar_url}
              name={this.state.user.login}
              bio={this.state.user.bio}
              location={this.state.user.location}
            />
          </div>
          <h1 className='H1-header'>Followers!</h1>
          <div className='Followers'>
            {this.state.followers.map(person => {
              console.log('person', person);
              return (
                <FollowerCard
                  follower_img={person.avatar_url}
                  followers_name={person.login}
                />
              );
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
