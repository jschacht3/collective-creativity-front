import React from 'react'
import { Icon } from 'expo'
import {getCurrentStory, getCurrentFragments, addVote, submitProposal} from '../store/story'
import {Image, Platform, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput} from 'react-native'
import Colors from '../constants/Colors'
import {connect} from 'react-redux'
import {Button, Card, Header} from 'react-native-elements'

class VoteTitle extends React.Component {

  constructor() {
    super()
    this.state = {
      submission: ''
    }
    this.handleVoteClick = this.handleVoteClick.bind(this)
    this.handleProposalSubmission = this.handleProposalSubmission.bind(this)
  }

  componentDidMount () {
    this.props.loadCurrentStory()
    this.props.loadCurrentFragments()
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentFragments.length !== prevProps.currentFragments.length) {
      this.props.loadCurrentFragments()
    }
  }

  handleVoteClick (id) {
    this.props.addVote(id)
  }

  handleProposalSubmission () {
    this.props.submitProposal(this.state)
    this.setState({
      submission: ''
    })
    this.props.loadCurrentFragments()
  }

  // eslint-disable-next-line complexity
  render() {
 
    const currentStory = this.props.currentStory
    const currentFragments = this.props.currentFragments

    if (currentStory !== undefined && currentStory.title) {
      return (
        <View>
            <Text/>
            <Text style={styles.getStartedText}>Vote on which words should be added to the story! {'\n'}{'\n'}Here are the options: </Text>
            <Text/>
            {currentFragments.map(fragment => 
              <View key={fragment.id}>
                <Button type="button" title={'"' + fragment.words + '"' + '\n \n Votes: ' + fragment.votes} onPress={() => this.handleVoteClick(fragment.id)}
                />
                <Text/>
              </View>
            )}
        </View>
      )
    } else if (currentStory !== undefined && !currentStory.title){
      return (
        <View>
            <Text/>
            <Text style={styles.getStartedText}>It's time to start a new story!</Text>
            <Text/>
            <Text style={styles.getStartedText}>Submit a proposal for what the title should be! 
            {'\n'}{'\n'}Voting will begin once we have received four submissions{'\n'}</Text>

            <Text style={styles.getStartedText}>Submit a Proposal: </Text>
            
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} maxLength={40}
            onChangeText={(submission) => this.setState({submission})} value={this.state.submission}/>
            
            <Button type="button" title={'Submit'} onPress={this.handleProposalSubmission}/>

            <Text style={styles.getStartedText}>{'\n'}Here are the proposals submitted so far:{'\n'}</Text>

            {currentFragments.map(fragment => 
              <View key={fragment.id}>
                <Button type="button" title={fragment.words + '\n \n Votes: ' + fragment.votes}/>
                <Text/>
              </View>
            )}
        </View>
      )
    } 
    else {
      return (<Text>Loading...</Text>)
    }
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
    addVote: (id) => dispatch(addVote(id)),
    submitProposal: (submission) => dispatch(submitProposal(submission)) 
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


export default connect(mapStateToProps, mapDispatchToProps)(VoteTitle)