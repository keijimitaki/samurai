import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native';

import { ListItem } from '../components/ListItem'
import axios from 'axios'
import Constants from 'expo-constants'

const URL = 
`https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

export const HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
      //console.log(response.data.articles)
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(()=>{
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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
          )
        }
        keyExtractor={(item, index)=> index.toString()}
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
