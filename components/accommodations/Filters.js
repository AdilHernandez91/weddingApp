import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { STYLES } from '../../constants';

class Filters extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  render() {
    const { isVisible, onClose } = this.props;

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

            <Text>Reset filters</Text>
          </View>

          <ScrollView>

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
  buttonContainer: {
    width: '100%',
    bottom: 5,
  }
});

export default Filters;
