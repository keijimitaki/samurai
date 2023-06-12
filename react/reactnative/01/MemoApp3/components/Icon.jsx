import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { string, number, oneOf } from 'prop-types';
import { createIconSetFromIcoMoon, Feather } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';

import icomoon from '../assets/fonts/icomoon.ttf';
import selection from '../assets/fonts/selection.json';


export default function Icon(props) {
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props
  const CustomIcon = createIconSetFromIcoMoon(selection);
  
  if (!fontLoaded) {
    return null
  }
  return (
    <CustomIcon name={name} size={size} color={color}  style={{ lineHeight: size-1 }}/>
  )
}

Icon.propTypes = {
  name: oneOf(['plus', 'delete', 'pencil', 'check']),
  size: number,
  color: string,
}

Icon.defaultProps = {
  size: 24,
  color: '#000',
}

