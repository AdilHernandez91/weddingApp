import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';

import { STYLES } from '../../constants';

class Filters extends Component {
  state = {
    maxDistance: 1,
    minDistance: 1,
    maxPrice: 0,
    minPrice: 0,
    recommended: false,
  };

  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };


  render() {
    const { isVisible, onClose } = this.props;
    const initialState = { maxDistance: 1, minDistance: 1, maxPrice: 0, minPrice: 0, recommended: false };


    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name={'close'} size={28} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState(initialState)}>
              <Text style={styles.resetText}>Reset filters</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.textStyle}>Max Distance: {this.state.maxDistance}</Text>
              <Slider
                value={this.state.maxDistance}
                maximumValue={10}
                minimumValue={1}
                step={1}
                thumbTintColor={STYLES.COLORS.DARK}
                minimumTrackTintColor={STYLES.COLORS.RED}
                maximumTrackTintColor={STYLES.COLORS.LIGHT}
                onValueChange={maxDistance => this.setState({ maxDistance })}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.textStyle}>Min Distance: {this.state.minDistance}</Text>
              <Slider
                value={this.state.minDistance}
                maximumValue={10}
                minimumValue={1}
                step={1}
                thumbTintColor={STYLES.COLORS.DARK}
                minimumTrackTintColor={STYLES.COLORS.RED}
                maximumTrackTintColor={STYLES.COLORS.LIGHT}
                onValueChange={minDistance => this.setState({ minDistance })}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.textStyle}>Max Price: {this.state.maxPrice.toFixed(2)}</Text>
              <Slider
                value={this.state.maxPrice}
                maximumValue={1000}
                minimumValue={1}
                thumbTintColor={STYLES.COLORS.DARK}
                minimumTrackTintColor={STYLES.COLORS.RED}
                maximumTrackTintColor={STYLES.COLORS.LIGHT}
                onValueChange={maxPrice => this.setState({ maxPrice })}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.textStyle}>Min Price: {this.state.minPrice.toFixed(2)}</Text>
              <Slider
                value={this.state.minPrice}
                maximumValue={1000}
                minimumValue={1}
                thumbTintColor={STYLES.COLORS.DARK}
                minimumTrackTintColor={STYLES.COLORS.RED}
                maximumTrackTintColor={STYLES.COLORS.LIGHT}
                onValueChange={minPrice => this.setState({ minPrice })}
              />
            </View>

            <View style={styles.recommendedContainer}>
              <Text style={styles.textStyle}>Recommended</Text>
              <Switch
                trackColor={{
                  false: STYLES.COLORS.LIGHT_DARK,
                  true: STYLES.COLORS.RED,
                }}
                value={this.state.recommended}
                thumbColor={STYLES.COLORS.LIGHT}
                onValueChange={recommended => this.setState({ recommended })} />
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button title={'Apply filters'} color={STYLES.COLORS.RED} onPress={() => {}} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  content: {
    paddingTop: 40,
  },
  buttonContainer: {
    width: '100%',
    bottom: 5,
  },
  resetText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 24,
  },
  recommendedContainer: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Filters;
