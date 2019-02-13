import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import Filters from '../components/accommodations/Filters';
import { getAccommodations } from '../store/actions';
import CardItem from '../components/accommodations/CardItem';
import Loading from '../components/Loading';
import { STYLES } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import AccommodationDetail from '../components/accommodations/AccommodationDetail';

class AccommodationScreen extends Component {
  state = {
    search: '',
    modalVisible: false,
    isLoading: false,
    accommodation: null,
  };


  static propTypes = {
    accommodations: PropTypes.array.isRequired,
    getAccommodations: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleModal: this.toggleModal,
    });
    this.props.getAccommodations((status) => {
      this.setState({ isLoading: status });
    });
  }

  onSearchChange = search => {
    this.setState({ search });
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  onItemSelected = accommodation => {
    this.setState({ accommodation });
  };

  closeItemModal = () => {
    this.setState({ accommodation: null });
  };

  renderAccommodations = () => {
    return this.props.accommodations.map((accommodation, key) => {
      return (
        <CardItem
          key={key}
          handleSelect={this.onItemSelected}
          accommodation={accommodation} />
      );
    });
  };

  render() {
    const { search, modalVisible, accommodation } = this.state;

    if (this.state.isLoading)
      return <Loading />;

    return (
      <View style={styles.container}>
        <Filters isVisible={modalVisible} onClose={this.toggleModal}/>
        <AccommodationDetail accommodation={accommodation} onClose={this.closeItemModal}/>

        <Header
          containerStyle={styles.headerBar}
          centerComponent={{ text: 'Filter Accommodations' }}
          rightComponent={
            <TouchableNativeFeedback onPress={this.toggleModal}>
              <Ionicons name={'md-options'} size={28} />
            </TouchableNativeFeedback>
          }
        />

        <SearchBar
          placeholder="Type Here..."
          platform={'android'}
          showLoading={true}
          containerStyle={styles.searchBar}
          onChangeText={this.onSearchChange}
          value={search}
        />

        <ScrollView style={styles.cardListContainer}>
          {this.renderAccommodations()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    elevation: 3,
  },
  headerBar: {
    backgroundColor: STYLES.COLORS.WHITE,
    elevation: 8,
    height: 56,
    paddingBottom: 25,
  },
  cardListContainer: {
    marginBottom: 10,
  }
});

const mapStateToProps = state => {
  return {
    accommodations: state.accommodations.data,
  };
};

export default connect(mapStateToProps, { getAccommodations })(AccommodationScreen);
