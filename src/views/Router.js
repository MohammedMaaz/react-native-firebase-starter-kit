import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useEffect} from 'react';
import Navigation, {navigationRef, isMountedRef} from '../utils/navigation';
import AlertPopup from '../components/AlertPopup';
import {BackHandler, Text, StatusBar} from 'react-native';
import {Icon} from 'native-base';

//Views
import Home from './Home';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

const Tab = createBottomTabNavigator();

export default function Router() {
  useEffect(() => {
    let back;
    setTimeout(() => {
      back = BackHandler.addEventListener('hardwareBackPress', () => {
        if (!navigationRef.current?.canGoBack())
          AlertPopup({
            title: 'Exit App',
            message: 'Are you sure you want to exit the application?',
            onOk: BackHandler.exitApp,
          });
        else Navigation.goBack();
        return true;
      });
    }, 700);
    isMountedRef.current = true;
    return () => {
      back?.remove();
      isMountedRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          primary: '#43356E',
          background: '#43356E',
          notification: '#eb2343',
          card: '#43356E',
          text: '#333',
          border: '#4c1f63',
        },
      }}
      ref={navigationRef}>
      <StatusBar backgroundColor="#43356E" barStyle="light-content" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({size}) => {
            return (
              <Icon
                type="SimpleLineIcons"
                name={icons[route.name]}
                size={size - 6}
                color="#fff"
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  color: '#fff',
                  borderColor: focused ? '#eb2343' : '#43356E',
                  fontSize: 11,
                  lineHeight: 20,
                  borderBottomWidth: 2,
                }}>
                {route.name}
              </Text>
            );
          },
        })}
        tabBarOptions={{style: {paddingTop: 6}}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const icons = {
  Home: 'home',
  Screen2: 'energy',
  Screen3: 'calendar',
  Screen4: 'chart',
  More: 'options',
};
