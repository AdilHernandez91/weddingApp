import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import Filters from '../components/accommodations/Filters';
import { getAccommodations } from '../store/actions';
import CardItem from '../components/accommodations/CardItem';
import Loading from '../components/Loading';

class AccommodationScreen extends Component {
  state = {
    search: '',
    modalVisible: false,
    isLoading: false,
  };

  static propTypes = {
    accommodations: PropTypes.array.isRequired,
    getAccommodations: PropTypes.func.isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <TouchableOpacity onPress={() => params.handleModal()}>
          <Ionicons name={'md-options'} size={28} style={{ paddingRight: 15 }} />
        </TouchableOpacity>
      ),
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleModal: this.openModal,
    });
    this.props.getAccommodations((status) => {
      this.setState({ isLoading: status });
    });
  }

  onSearchChange = search => {
    this.setState({ search });
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  renderAccommodations = () => {
    return this.props.accommodations.map((accommodation, key) => {
      return <CardItem key={key} accommodation={accommodation} />;
    });
  };

  render() {
    const { search, modalVisible } = this.state;

    if (this.state.isLoading)
      return <Loading />;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          platform={'android'}
          showLoading={true}
          containerStyle={styles.searchBar}
          onChangeText={this.onSearchChange}
          value={search}
        />
        <Filters isVisible={modalVisible} onClose={this.closeModal}/>
        <ScrollView>
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
    elevation: 5,
  },
});

const mapStateToProps = state => {
  return {
    accommodations: state.accommodations.data,
  };
};

export default connect(mapStateToProps, { getAccommodations })(AccommodationScreen);
