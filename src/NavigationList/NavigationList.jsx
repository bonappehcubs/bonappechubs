import React, { Component } from 'react';
import NavigationListItems from '../NavigationListItems/NavigationListItems';
import './styles/NavigationList.less';

class NavigationList extends Component {
  constructor(props) {
    super(props);
    this.navItems = [
      'about',
      'travel',
      'food'
    ];
  }

  render() {
    return (
        <div className='nav-container'>
          <NavigationListItems
            navigationItems={this.navItems}
            getInstagramPosts={this.props.getInstagramPosts}
          />
        </div>
    );
  }
}

export default NavigationList;
