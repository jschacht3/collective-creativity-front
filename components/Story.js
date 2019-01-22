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
            <Text style={styles.getStartedHeader}>Below is the story so far!</Text>
            <Text/> 
            <Text style={styles.getStartedText}>As the voting continues, the proposed additions with the most votes will get added to the story! </Text>
            <Text/>
            <Text/>
            <Text style={styles.getStartedHeader}>{currentStory.title}</Text>
            <Text/>
            <Text style={styles.getStartedText}>{content} </Text>
            <Text/>
        </View>
      )
    } else {
      return (<Text>Loading...</Text>)
    } 
  }
}

const mapStateToProps = state => {
  console.log("I AM STATE STORY, ", state)
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(96,100,109, 0.8)',
    fontSize: 20,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    color: 'rgba(0,0,0,0.4)'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  getStartedHeader: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 34,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Story)

