import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? "bookmark" : "bookmark-o"

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={name} size={40} color="salmon" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

});
