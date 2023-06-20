import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import MemoListScreen from './screens/MemoListScreen';
import MemoDetailScreen from './screens/MemoDetailScreen';
import MemoEditScreen from './screens/MemoEditScreen';
import MemoCreateScreen from './screens/MemoCreateScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

//import { db } from './util/firebase'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='LogIn'
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

