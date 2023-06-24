import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import { collection, addDoc, doc, setDoc, getDoc, getDocs, QuerySnapshot, 
  onSnapshot, query, orderBy } from "firebase/firestore";
import { auth, db } from '../utils/firebase'
import { useIsFocused } from '@react-navigation/native'


export default function MemoListScreen(props) {
  const { navigation } = props
  const [ memos, setMemos ] = useState([])
  const isFocused = useIsFocused();

  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> <LogOutButton/>,
    })
  }, [])

  useEffect(()=>{
    
    (async ()=> {

      let userMemos = []
      const currentUser = auth.currentUser
      const usersMemoCollectionRef = collection(db, 'users', currentUser.uid, 'memos');
      const q = query(usersMemoCollectionRef, orderBy('updatedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        //console.log(doc.id)
        userMemos.push({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        })

      });
      setMemos(userMemos)

    })()    

  }, [isFocused])

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成しよう！</Text>
          <Button 
            style={emptyStyles.button}
            label="作成する"
            onPress={ ()=>{navigation.navigate('MemoCreate')} }/>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MemoList memos={memos}/>
      <CircleButton name="plus" onPress={ ()=>{navigation.navigate('MemoCreate')} }/>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

})

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  }

})

