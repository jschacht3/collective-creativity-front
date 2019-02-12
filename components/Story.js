import React from 'react'
import { Icon } from 'expo'
import {getCurrentStory, getCurrentFragments, getStoryContent} from '../store/story'
import {Image, Platform, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native'
import Colors from '../constants/Colors'
import {connect} from 'react-redux'
import {Button, Card, Header} from 'react-native-elements'

class Story extends React.Component {

  async componentDidMount () {
    await this.props.loadCurrentStory()
    await this.props.loadCurrentFragments()
    await this.props.loadStoryContent()
  }

  async componentDidUpdate(prevProps) {
    if (this.props.currentStoryContent.length !== prevProps.currentStoryContent.length) {
      currentStoryContent = this.props.currentStoryContent
    }
  }

  render() {
 
    const currentStory = this.props.currentStory
    const currentStoryContent = this.props.currentStoryContent


    if (currentStory !== undefined && currentStoryContent !== undefined){
      let content = '';
      for (let i = 1; i < currentStoryContent.length; i++){
        content += currentStoryContent[i].words + " "
      }
      return (
        <View>
            <Text/> 
            <Text style={styles.header}>Below is the story so far!</Text>
            <Text/> 
            <Text style={styles.body}>As the voting continues, the proposed additions with the most votes will get added to the story! </Text>
            <Text/>
            <Text/>
            <Text style={styles.header}>{currentStory.title}</Text>
            <Text/>
            <Text style={styles.body}>{content} </Text>
            <Text/>
        </View>
      )
    } else {
      return (<Text>Loading...</Text>)
    } 
  }
}

const mapStateToProps = state => {
  return {
    currentStory: state.currentStory,
    currentFragments: state.currentFragments,
    currentStoryContent: state.currentStoryContent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentStory: () => dispatch(getCurrentStory()),
    loadCurrentFragments: () => dispatch(getCurrentFragments()),
    loadStoryContent: () => dispatch(getStoryContent())
  }
}

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  header: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 34,
    textAlign: 'left',
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Story)

