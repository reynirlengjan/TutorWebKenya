import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class Home extends Component {
  state = {
    links: [
      //{ title: 'Login', link: 'https://tutor-web.net/login' },
      { title: 'Register', link: 'https://tutor-web.net/@@register' },
      { title: 'Tutorweb drill main menu', link: 'https://tutor-web.net/++resource++tutorweb.quiz/start.html' },
      { title: 'Subscribe to Standard Eight Term 1 Mathematics', link: 'https://tutor-web.net/++resource++tutorweb.quiz/quiz.html?lecUri=https%3A%2F%2Ftutor-web.net%2Fmath%2Fstega001.0%2Fq01%2Fquizdb-sync' },
      //{ title: 'Subscribe to Formula and Variation', link: 'https://tutor-web.net/++resource++tutorweb.quiz/quiz.html?lecUri=https%3A%2F%2Ftutor-web.net%2Fmath%2Fmath092.03%2F3002%2Fquizdb-sync' },
      { title: 'Subscribe to KCSE Drills', link: 'https://tutor-web.net/++resource++tutorweb.quiz/quiz.html?lecUri=https%3A%2F%2Ftutor-web.net%2Fmath%2Fkcse%2Fp01q01%2Fquizdb-sync' }
    ]
  }

  twButtonPress(item) {
    const { title, link } = item
    this.props.navigation.navigate('Browser', { title, link })
  }
//sér takki?
  twLogin(itemLogin) {
    const { title2, link2 } = itemLogin
    this.props.navigation.navigate('Browser', { title2, link2 })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Image
            style={styles.image}
              source={{uri: 'https://tutor-web.net/++theme++www.tutor-web.net/images/tutorweb-logo.png'}}
        />
          {this.state.links.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.twButtonPress(item)}
              style={styles.button}
            >
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    //position: 'absolute',
    top: -90,
    left: 15,
    width: 318,
    height: 90
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#356bca',
    borderRadius: 25,
    padding: 7
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
})

export default Home