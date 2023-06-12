import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import MemoListScreen from './screens/MemoListScreen';
import MemoDetailScreen from './screens/MemoDetailScreen';
import MemoEditScreen from './screens/MemoEditScreen';
import MemoCreateScreen from './screens/MemoCreateScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

import { initializeApp } from "firebase/app";
import { 
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
 } from "@env"

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: `${FIREBASE_API_KEY}`,
  authDomain: `${FIREBASE_AUTH_DOMAIN}`,
  projectId: `${FIREBASE_PROJECT_ID}`,
  storageBucket: `${FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${FIREBASE_APP_ID}`
};

const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='SignUp'
        screenOptions={{
          headerStyle: { backgroundColor: '#467fd3' },
          headerTitle: 'Memo App',
          headerTitleStyle: { color: '#fff' },
          headerTintColor: '#fff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen 
          name="LogIn" 
          component={LogInScreen} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

