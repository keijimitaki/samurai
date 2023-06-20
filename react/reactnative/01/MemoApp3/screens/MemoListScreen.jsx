import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import { collection, addDoc, doc, setDoc, getDoc, getDocs, QuerySnapshot } from "firebase/firestore";
import { auth, db } from '../util/firebase'

export default function MemoListScreen(props) {
  const { navigation } = props
  const [ memos, setMemos ] = useState([])

  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> <LogOutButton/>,
    })
  }, [])


  useEffect(()=>{
    (async () => {
      try {
        let userMemos = []
        const currentUser = auth.currentUser
        const snapShot = await getDocs(collection(db, 'users', currentUser.uid, 'memos'))
        snapShot.forEach((doc)=>{
          const data = doc.data()
          console.log(doc.id)
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          })
        })
        setMemos(userMemos)
      } catch (error) {
        console.log('MemoScreen useEffect エラー発生', error)
      }    
  
    })()
   
  }, [])

  return(
    <View style={styles.container}>
      <MemoList memos={memos}/>
      <CircleButton name="plus" onPress={ ()=>{navigation.navigate('MemoCreate')} }/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

});

