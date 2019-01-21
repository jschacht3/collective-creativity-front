import React from 'react'
import { Icon } from 'expo'
import {getCurrentStory, getCurrentFragments} from '../store/story'
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Colors from '../constants/Colors'
import {connect} from 'react-redux'

class Vote extends React.Component {

  componentDidMount () {
    this.props.loadCurrentStory()
  }

  render() {
    console.log("BLAH")
    const testSong = {
      name: 'A long time ago in a galaxy far, far away',
      votes: 1     
    }
    const currentStory = this.props.currentStory
    return (
      <Text>Please vote for the next note in story {currentStory.title}!</Text>
    );
  }
}

const mapStateToProps = state => {
  console.log('I AM STATE: ', state)
  return {
    currentStory: state.currentStory,
    currentFragments: state.currentFragments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentStory: () => dispatch(getCurrentStory()),
    loadCurrentFragments: () => dispatch(getCurrentFragments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)