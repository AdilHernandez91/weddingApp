import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView, Permissions } from 'expo';
import { ListItem } from 'react-native-elements';

import { regionFrom } from '../utils/address';
import Loading from '../components/Loading';

class AboutScreen extends Component {
  state = {
    region: regionFrom(41.2672892, 2.0060687, 1000),
    isLoading: true,
  };

  static navigationOptions = {
    headerTitle: 'About'
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.LOCATION);
    this.setState({ isLoading: false });
  }

  renderFeatures = () => {
    const features = ['Parking for guests', 'Near the beach', 'A person taking care of child for 6 hours'];

    return features.map((item, i) => {
      return (
        <ListItem topDivider bottomDivider key={i} title={item} />
      );
    });
  };

  render() {
    if (this.state.isLoading)
      return <Loading />;

    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Text style={styles.eventTitle}>Event</Text>
          <View style={{ width: '100%', elevation: 2 }}>
            <Text>The event will be at Les Marines on 31/08/2019 and the ceremony will start at 19:00pm.</Text>
          </View>
        </View>

        <View style={styles.viewContainer}>
          <Text style={styles.eventTitle}>Features</Text>
        </View>

        <View>
          {this.renderFeatures()}
        </View>

        <View style={styles.viewContainer}>
          <Text style={styles.eventTitle}>How to go there</Text>
        </View>
        <MapView style={styles.mapStyle} initialRegion={this.state.region}>
          <MapView.Marker key={1} title={'Les Marines'} coordinate={{ latitude: 41.2672892, longitude: 2.0060687 }} />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    padding: 10,
  },
  eventTitle: {
    fontSize: 28,
    paddingBottom: 20,
  },
  mapStyle: {
    flex: 1,
  }
});

export default AboutScreen;
