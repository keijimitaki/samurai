import React from 'react';
import { View, ScrollView, Text, StyleSheet, 
  TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { string, bool, shape } from 'prop-types';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

import Icon from '../components/Icon'


export default function MemoEditScreen(props) {
  const { navigation } = props
  return(
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline styles={styles.input} />
      </View>
      <CircleButton name="check" onPress={()=> navigation.goBack()}/>
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

