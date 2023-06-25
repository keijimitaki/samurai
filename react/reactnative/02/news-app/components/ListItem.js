import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';


export const ListItem = (props) => {


  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      <View style={styles.leftContainer}>
        <Image 
          style={ {width: 100, height:100} }
          source={ {uri: props.imageUrl} }  
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} >
          {props.title}
        </Text>
        <Text style={styles.subText}>
          {props.author}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 5,
  },
  leftContainer: {
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },


});
