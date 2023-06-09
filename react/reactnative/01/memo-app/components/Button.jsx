import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { func, shape, string } from 'prop-types'

export default function Button(props) {
  const { label, onPress, style } = props
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
}

Button.defaultProps = {
  onPress: null,
}


const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    height: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#fff',
  },

});
