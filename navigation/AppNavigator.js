import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, Text, StyleSheet } from 'react-native'
import Home from '../screens/Home'
import Browser from '../screens/Browser'

const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => ({
			title: 'TutorWeb',
			headerTintColor: '#fff',
		})
	},
	Browser: {
		screen: Browser,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.title,
			headerTintColor: 'green'
		})
	}
})

const TutorWeb = createAppContainer(HomeStack)

export default TutorWeb