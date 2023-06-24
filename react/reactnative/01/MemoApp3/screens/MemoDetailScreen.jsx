import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from '../utils/firebase'
import { dateToString } from '../utils/date'

export default function MemoDetailScreen(props) {
  const { navigation, route } = props
  const { id } = route.params
  const [memo, setMemo] = useState(null)

  useEffect(()=> {
    (async() => {
      const currentUser = auth.currentUser
      let unsub = ()=> {}
      if (currentUser) {
        unsub = onSnapshot(doc(db, 'users', currentUser.uid, 'memos', id), (doc) => {
          const data = doc.data()
          setMemo({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          })
        });
  
      }
      return unsub
    })()

  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 60, buttom: 'auto' }} name="pencil" 
        onPress={ ()=> {navigation.navigate('MemoEdit', {id: memo.id, bodyText: memo.bodyText})} }/>
    </View>    
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({id: string})
  }).isRequired
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#fff',
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },


});

