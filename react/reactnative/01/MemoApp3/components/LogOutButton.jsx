import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { getAuth, signOut } from 'firebase/auth'

export default function LogOutButton() {
  const navigation = useNavigation()

  function handlePress() {
    const auth = getAuth()
    signOut(auth).then(()=>{
        navigation.reset({
          index: 0,
          routes: [{name: 'LogIn'}]})

    }).catch((error)=>{
      Alert.alert('ログアウトに失敗しました')
    })

  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonLabel}>ログアウト</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  buttonLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },

});
