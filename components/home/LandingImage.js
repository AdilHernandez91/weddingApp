import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import { STYLES } from '../../constants';

const propTypes = {
  image: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  onNavigate: PropTypes.func,
  pathTo: PropTypes.string,
};

const defaultProps = {
  onNavigate: () => {},
};

const LandingImage = props => {
  return (
    <Tile
      imageSrc={props.image}
      title={props.title}
      activeOpacity={0.8}
      caption={props.caption}
      captionStyle={styles.caption}
      onPress={() => props.onNavigate(props.pathTo)}
      featured />
  );
};

const styles = StyleSheet.create({
  caption: {
    fontSize: 26,
    fontStyle: 'italic',
    color: STYLES.COLORS.WHITE,
  },
});

LandingImage.propTypes = propTypes;
LandingImage.defaultProps = defaultProps;

export default LandingImage;
