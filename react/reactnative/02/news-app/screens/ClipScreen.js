import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

import { ListItem } from '../components/ListItem'
import axios from 'axios'
import Constants from 'expo-constants'

import { useSelector } from 'react-redux'

export const ClipScreen = ({navigation}) => {
  const clips = useSelector((state)=> state.user.clips)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({item})=>(
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={()=> navigation.navigate("Article", 
            {
              article: item
            })}
          />
        )}
        keyExtractor={(item, index)=>index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
