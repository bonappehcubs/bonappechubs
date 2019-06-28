import React, { Component } from 'react';
import NavigationList from '../NavigationList/NavigationList';
import AboutMe from '../AboutMe/AboutMe';
import './styles/App.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    fetch('https://api.instagram.com/v1/users/self/media/recent?access_token=1665792495.fa1fbde.80d35431a95843bdbd779a1ce9498694')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            post: result.data,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <div className='home-wrapper'>
        <NavigationList
            getInstagramPosts={this.state.post}/>
      </div>
    );
  }
}

export default App;
