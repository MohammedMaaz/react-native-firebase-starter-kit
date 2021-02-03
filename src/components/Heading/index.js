import React from 'react';
import {View, StyleSheet, ViewPropTypes, Text} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import Navigation from '../../utils/navigation';

/**
 * @augments {Component<Props, State>}
 */
const Heading = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.leftContainer}>
        {props.leftComponent === 'back' ? (
          <Icon
            onPress={props.onBackPress}
            name="arrow-left"
            type="MaterialCommunityIcons"
            color="#fff"
            size={23}
          />
        ) : (
          props.leftComponent
        )}
      </View>
      <View style={styles.midContainer}>
        {props.midComponent ? (
          props.midComponent
        ) : (
          <>
            <Text style={styles.headingText}>{props.headingText}</Text>
            {props.subHeadingText && (
              <Text style={styles.subHeadingText}>{props.subHeadingText}</Text>
            )}
          </>
        )}
      </View>
      <View style={styles.rightComponent}>{props.rightComponent}</View>
    </View>
  );
};

Heading.defaultProps = {
  rightComponent: null,
  onBackPress: Navigation.goBack,
  leftComponent: null,
};

Heading.propTypes = {
  containerStyle: ViewPropTypes.style,
  leftComponent: PropTypes.element,
  midContainer: PropTypes.element,
  rightComponent: PropTypes.element,
  headingText: PropTypes.string.isRequired,
  subHeadingText: PropTypes.string,
  onBackPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    width: '100%',
  },
  midContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  leftContainer: {
    position: 'absolute',
    left: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightComponent: {
    position: 'absolute',
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 19,
    color: '#fff',
    lineHeight: 22,
  },
  subHeadingText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Heading;
