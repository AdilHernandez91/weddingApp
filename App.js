import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navigation from './Navigation';
import store from './store';
import NavigationService from './services/NavigationService';
import { Permissions } from 'expo';

export default class App extends Component {
  async componentDidMount() {
    await Permissions.askAsync(Permissions.LOCATION);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }} />
      </Provider>
    );
  }
}
