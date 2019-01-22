import React from 'react'
import { Icon } from 'expo'
import {getCurrentStory, getCurrentFragments, addVote} from '../store/story'
import {Image, Platform, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native'
import Colors from '../constants/Colors'
import {connect} from 'react-redux'
import {Button, Card, Header} from 'react-native-elements'

class Vote extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount () {
    this.props.loadCurrentStory()
    this.props.loadCurrentFragments()
  }

  handleClick (id) {
    console.log("AM I HERE")
    this.props.addVote(id)
  }

  render() {
 
    const currentStory = this.props.currentStory
    const currentFragments = this.props.currentFragments

    return (
      <View>
          <Text/>
          <Text style={styles.getStartedText}>Story Title: {currentStory.title}</Text>
          <Text/>
          <Text style={styles.getStartedText}>Please vote on the next part of the story! {'\n'}{'\n'}Here are the options: </Text>
          <Text/>
          {currentFragments.map(fragment => 
            <View key={fragment.id}>
              <Button type="button" title={fragment.words + '\n \n Votes: ' + fragment.votes} onPress={() => this.handleClick(fragment.id)}
              />
              <Text/>
            </View>
          )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentStory: state.currentStory,
    currentFragments: state.currentFragments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentStory: () => dispatch(getCurrentStory()),
    loadCurrentFragments: () => dispatch(getCurrentFragments()),
    addVote: (id) => dispatch(addVote(id))
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


export default connect(mapStateToProps, mapDispatchToProps)(Vote)