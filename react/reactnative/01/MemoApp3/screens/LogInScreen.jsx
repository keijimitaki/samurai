import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, 
  TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import Button from '../components/Button';
import Loading from '../components/Loading'

import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'

export default function LogInScreen(props) {
  const { navigation } = props
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ isLoading, setLoading ] = useState(true)

  useEffect(()=> {

    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      console.log('onAuthStateChanged called')

      if (user) {
        console.log('😄　log in')
        navigation.reset({
          index: 0,
          routes: [{name: 'MemoList'}]})
      } else {
        console.log('👋 not log in')
      } 
      setLoading(false)

    })

    return unsubscribe
  
  }, [])


  function handlePress() {
    
    setLoading(true)

    signInWithEmailAndPassword( auth, email, password )
      .then((userCredential) => {
        const {user} = userCredential
        console.log('ログイン', user.uid)
        navigation.reset({
          index: 0,
          routes: [{name: 'MemoList'}]})
      })
      .catch( (error) => {
        Alert.alert(error.code)
        console.log('エラー発生！！', error.code, error.message )
      })
      .then(()=>{
        setLoading(false)  

      })
  }

  return(
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
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
          <Text style={styles.footerText}>Not registered</Text>
          <TouchableOpacity onPress={
            ()=>{
              navigation.reset({
                index: 0,
                routes: [{name: 'SignUp'}]
              })
            }
          }>

            <Text style={styles.footerLink}>Sign up here!</Text>
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

