import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import InstagramPosts from '../InstagramPosts/InstagramPosts';
import Travel from '../Travel/Travel';
import './styles/NavigationListItems.less';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class NavigationListItems extends Component {
  constructor(props) {
    super(props);
    this.finalNavItems = [];
    this.finalRoutingItems = [];
    this.getNavigationItems = this.getNavigationItems.bind(this);
    this.getRoutingItems = this.getRoutingItems.bind(this);
  }

  getNavigationItems() {
    let currentNav = '';
    let newPage = '';
    this.finalNavItems = this.props.navigationItems.map((item, i) => (
      i === 0 ? newPage = '/' : newPage = '/' + item + '/',
      <li key={i}>
        <NavLink to={newPage} className='nav-items'>{item}</NavLink>
      </li>
    ));
  };

  getRoutingItems() {
    let route = [];
    let newPage = '';
    const pageComponents = [
      props => <AboutMe {...props} />,
      props => <Travel {...props} />,
      props => <InstagramPosts {...props}
           setInstagramPosts={this.props.getInstagramPosts}
       />
    ];

    this.props.navigationItems.map((page, item) => (
        item === 0 ? newPage = '/' : newPage = '/' + page + '/',
        route.push({
          path: newPage,
          exact: true,
          component: pageComponents[item]
        })
    ));

    this.finalRoutingItems = route.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  }

  render() {
    this.getNavigationItems();
    this.getRoutingItems();
    return (
        <Router history={history}>
          <div>
            <nav className='nav-wrapper'>
              <ul>
                {this.finalNavItems}
              </ul>
            </nav>
            {this.finalRoutingItems}
          </div>
        </Router>
    );
  }
}

export default NavigationListItems;
