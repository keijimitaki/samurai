import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, 
  TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { string, bool, shape } from 'prop-types';

import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

import Icon from '../components/Icon'
import { auth, db } from '../utils/firebase'


export default function MemoEditScreen(props) {
  const { navigation, route } = props
  const { id, bodyText } = route.params
  const [body, setBody] = useState(bodyText)

  function handlePress() {

    (async() => {
      const currentUser = auth.currentUser
      let unsub = ()=> {}
      if (currentUser) {
        try {

          unsub = await setDoc(doc(db, 'users', currentUser.uid, 'memos', id), {
            bodyText: body,
            updatedAt: new Date(),
          }, {merge: true} )
          
          navigation.goBack()

        } catch (error) {
          Alert.alert(error.code)
        }
        
      }
      return unsub
    })()

  }

  return(
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput 
          value={body} 
          multiline 
          styles={styles.input} 
          onChangeText={(text) => {setBody(text)}}
        />
      </View>
      <CircleButton name="check" onPress={handlePress}/>
    </KeyboardAvoidingView>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({id: string, bodyText: string})
  }).isRequired
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 26,
    lineHeight: 24,
  },


});

