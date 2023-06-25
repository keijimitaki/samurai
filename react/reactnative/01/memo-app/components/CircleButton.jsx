import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types'
import { Feather } from '@expo/vector-icons';

import Icon from './Icon';

export default function CircleButton(props) {
  const { children, style, name, onPress } = props
  return (
      <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
        <Icon name={name}  size={40} color="white" />

      </TouchableOpacity>

  )
}

CircleButton.propTypes = {
  name: string.isRequired,
  style: shape(),
  onPress: func,
}

CircleButton.defaultProps = {
  style: null,
  onPress: null,
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elavation: 8,
    
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  }

});
