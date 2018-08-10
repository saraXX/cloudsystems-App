import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Login from '../screens/Login';
import Home from '../screens/Home';
import First from '../screens/First';
import Persional from '../screens/Persional';
import Courses from '../screens/Courses';
import Tasks from '../screens/Tasks';

const StartStack = createStackNavigator({
  Start: First,
});

StartStack.navigationOptions = {
  tabBarLabel: 'Start',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: Home,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const PersionalStack = createStackNavigator({
  Persional: Persional,
});

PersionalStack.navigationOptions = {
  tabBarLabel: 'Personal',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const CoursesStack = createStackNavigator({
  Courses: Courses,
});

CoursesStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const TasksStack = createStackNavigator({
  Tasks: Tasks,
});

TasksStack.navigationOptions = {
  tabBarLabel: 'Tasks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  StartStack,
  HomeStack,
  CoursesStack,
  TasksStack,
  PersionalStack,

});
