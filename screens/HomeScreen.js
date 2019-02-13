import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import LandingImage from './../components/home/LandingImage';

import LandingImg from './../assets/landing-image.jpg';
import InvitationImage from './../assets/invitation.jpg';
import ProposalImage from './../assets/proposal.jpg';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  handleNavigation = path => {
    this.props.navigation.navigate(path);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LandingImage
          title="We're getting married"
          caption="31/08/2019"
          onNavigate={this.handleNavigation}
          pathTo={'Accommodation'}
          image={LandingImg} />
        <LandingImage
          title="About the event"
          onNavigate={this.handleNavigation}
          pathTo={'About'}
          image={InvitationImage} />
        <LandingImage
          title="Contact Us"
          onNavigate={this.handleNavigation}
          pathTo={'Contact'}
          image={ProposalImage} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
