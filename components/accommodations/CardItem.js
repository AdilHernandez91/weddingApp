import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import { STYLES } from '../../constants';


const propTypes = {
  accommodation: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    isRecommended: PropTypes.bool,
    address: PropTypes.string,
    phone: PropTypes.string,
    distance: PropTypes.number,
  }).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

const renderRecommended = isRecommended => {
  if (isRecommended) {
    return (
      <AntDesign name={'checkcircleo'} size={28} color={STYLES.COLORS.GREEN} />
    );
  }
};


const CardItem = ({ accommodation, handleSelect }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{accommodation.name}</Text>
        {renderRecommended(accommodation.isRecommended)}
      </View>

      <View style={styles.cardBody}>
        <Text>Address: {accommodation.address}</Text>
        <Text>Phone: {accommodation.phone}</Text>
      </View>

      <View style={styles.cardButtonContainer}>
        <Button
          title={'View More'}
          color={STYLES.COLORS.RED}
          onPress={() => handleSelect(accommodation)}/>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 5,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardBody: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  cardPriceContainer: {
    backgroundColor: STYLES.COLORS.RED,
    borderWidth: 0,
    elevation: 5,
    borderRadius: 7,
    width: '25%',
    padding: 5,
  },
  cardPrice: {
    color: STYLES.COLORS.WHITE,
  },
  cardButtonContainer: {
    bottom: 0,
    paddingTop: 20,
    alignSelf: 'flex-end',
  },
});

CardItem.propTypes = propTypes;

export default CardItem;
