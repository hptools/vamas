import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainScene from './scenes/MainScene';
import SettingsScene from './scenes/SettingsScene';
import { HeaderStyle, HeaderTitleStyle } from './config/Header';
import Colors from './config/Colors';

const tabIcon = (iconName, focused) => (
  <Icon 
    name={iconName} 
    style={{ 
      marginTop: ((focused) ? 0 : 15),
      fontSize: ((focused) ? 16 : 20), 
      color: ((focused) ? Colors.selectedTabIconColor : Colors.unselectedTabIconColor) 
    }} 
  />
);

const TabNav = TabNavigator({
  Home: {
    screen: StackNavigator({
      Main: { 
        screen: MainScene,
        navigationOptions: {
          title: 'Tests',
          headerBackTitle: null,
          headerStyle: HeaderStyle,
          headerTitleStyle: HeaderTitleStyle
        }
      }
    }, {
      navigationOptions: {
        tabBarLabel: 'Tests',
        tabBarIcon: ({ focused }) => (
          tabIcon('dashboard', focused)
        )
      }
    })
  },
  Settings: {
    screen: StackNavigator({
      Settings: { 
        screen: SettingsScene,
        navigationOptions: {
          title: 'Settings',          
          headerStyle: HeaderStyle,
          headerTitleStyle: HeaderTitleStyle
        }
      }
    }, {
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ focused }) => (
          tabIcon('cog', focused)
        )
      }
    })
  }
}, {
  initialRouteName: 'Home',
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: 'red'
    },
    inactiveTintColor: Colors.tabColor,
    inactiveBackgroundColor: Colors.tabColor,
    activeBackgroundColor: Colors.selectedTabColor,
    activeTintColor: Colors.tabTextColor,
    style: {
      backgroundColor: Colors.tabColor
    }
  }
});

class RouterComponent extends Component {
  render() {
    return (
      <TabNav />
    );
  }
}

export default RouterComponent;
