import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, 
  TextInput, KeyboardAvoidingView } from 'react-native';

import { string, bool, shape } from 'prop-types';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

import Icon from '../components/Icon'

import { collection, addDoc, doc, setDoc, getDoc, getDocs, QuerySnapshot } from "firebase/firestore";
import { auth, db } from '../utils/firebase'


export default function MemoCreateScreen(props) {
  const { navigation } = props
  const [ bodyText, setBodyText ] = useState('') 

  const handlePress = async() => {
    
    try {
      const currentUser = auth.currentUser
      const docRef = await addDoc(collection(db, `users/${currentUser.uid}/memos`), {
        bodyText,
        updatedAt: new Date(),
      })

      if (docRef) {
        console.log('Created' , docRef.id)
        // navigation.goBack()
        navigation.reset({
          index: 0,
          routes: [{name: 'MemoList'}]})

      }
  
    } catch (error) {
      console.log('エラー発生', error)
    }

  }
      
  return(
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput 
          value={bodyText} 
          multiline 
          styles={styles.input}
          onChangeText={(text)=> {setBodyText(text) }}
          autoFocus />
      </View>
      <CircleButton name="check" onPress={handlePress}/>
    </KeyboardAvoidingView>
  );
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

