import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, 
  TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'


export default function SignUpScreen(props) {
  const { navigation } = props
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  function handlePress() {
    const auth = getAuth()

    createUserWithEmailAndPassword( auth, email, password )
      .then((userCredential) => {
        const {user} = userCredential
        console.log('ユーザー作成！！', user.uid)
        navigation.reset({
          index: 0,
          routes: [{name: 'MemoList'}]})
      })
      .catch( (error) => {
        console.log('エラー発生！！', error.code, error.message )
      })
  
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={(text)=>{ setEmail(text) }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address" 
          textContentType="emailAddress"  
        />
        <TextInput 
          style={styles.input}
          value={password}
          onChangeText={(text)=>{ setPassword(text) }}
          autoCapitalize="none"
          placeholder="Password" 
          secureTextEntry
          textContentType="password"  
        />
        <Button label="Submit" 
          onPress={ handlePress }
          />            
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity onPress={
            ()=>{
              navigation.reset({
                index: 0,
                routes: [{name: 'LogIn'}]
              })
            }
          }>
            <Text style={styles.footerLink}>Log In.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#4f76d3',
  },
  footer: {
    flexDirection: 'row',
  }


});

