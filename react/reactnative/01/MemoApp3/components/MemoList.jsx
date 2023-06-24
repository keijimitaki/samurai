import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, FlatList } from 'react-native';
import { string, bool, shape, instanceOf, arrayOf } from 'prop-types';

import { useNavigation } from '@react-navigation/native'
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../utils/firebase'
import { dateToString } from '../utils/date'

import Icon from './Icon'

export default function MemoList(props) {
  const { memos } = props
  const navigation = useNavigation()

  function deleteMemo(id) {
    
    const currentUser = auth.currentUser
    if (currentUser) {
      Alert.alert('メモを削除します','よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: async() => {
            await deleteDoc(doc(db, 'users', currentUser.uid, 'memos', id))
            .then(()=>{
              navigation.reset({
                index: 0,
                routes: [{name: 'MemoList'}]})
  
            })
            .catch((error)=>{
              Alert.alert('削除に失敗しました', error)
            })
            
    
          },
        }
      ])
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity 
        style={styles.memoListItem}
        onPress={()=>{navigation.navigate('MemoDetail', {id: item.id})}}>
        <View>
          <Text style={styles.memoListTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListDate}>{dateToString(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={()=>{deleteMemo(item.id)}} >
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )

}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  }))
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },

});
