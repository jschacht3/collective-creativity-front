/* eslint-disable complexity */
import React from 'react'
import { Icon } from 'expo'
import {getCurrentStory, getCurrentFragments, addVote, submitProposal, completeVote, getStoryContent} from '../store/story'
import {Image, Platform, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput} from 'react-native'
import Colors from '../constants/Colors'
import {connect} from 'react-redux'
import {Button, Card, Header} from 'react-native-elements'

class Vote extends React.Component {

  constructor() {
    super()
    this.state = {
      submission: ''
    }
    this.handleVoteClick = this.handleVoteClick.bind(this)
    this.handleProposalSubmission = this.handleProposalSubmission.bind(this)
    this.voteWinner = this.voteWinner.bind(this)
  }

  async componentDidMount () {
    await this.props.loadCurrentFragments()
    await this.props.loadCurrentStory()
    await this.props.loadStoryContent()
  }

  // async componentDidUpdate(prevProps) {
  //   if (this.props.currentFragments.length !== prevProps.currentFragments.length) {
  //     this.props.loadCurrentFragments()
  //   }
  // }

  async handleVoteClick (id) {
    await this.props.addVote(id)
  }

  async handleProposalSubmission () {
    await this.props.submitProposal(this.state)
    this.setState({
      submission: ''
    })
    await this.props.loadCurrentFragments()
    await this.props.loadCurrentStory()
  }

  async voteWinner (id) {
    await this.props.completeVote(id)
    await this.props.loadCurrentFragments()
    await this.props.loadCurrentStory()
    await this.props.loadStoryContent()
  }

  render() {
 
    const currentStory = this.props.currentStory
    const currentFragments = this.props.currentFragments

    let trigger = false
    let voteLeader
    for (let i = 0; i < currentFragments.length; i++) {
      if (currentFragments[i].votes >= 10){ 
        trigger = true
        voteLeader = currentFragments[i]
      }
    }
    if (trigger) this.voteWinner(voteLeader.id)
   
    if (currentStory !== undefined && currentFragments.length >= 4 && !trigger) {
      return (
        <View>
            <Text/>
            <Text style={styles.getStartedText}>Vote on what the story's title should be! {'\n'}{'\n'}Here are the user submitted proposals: </Text>
            <Text/>
            {currentFragments.map(fragment => 
              <View key={fragment.id}>
                <Button type="button" title={'"' + fragment.words + '"' + '\n \n Votes: ' + fragment.votes} onPress={() => this.handleVoteClick(fragment.id)}/>
                <Text/>
              </View>
            )}
        </View>
      )
    } else if (currentStory !== undefined && currentStory.title !== undefined && currentStory.title === null && !trigger){
      return (
        <View>
            <Text/>
            <Text style={styles.getStartedText}>It's time to start a new story!</Text>
            <Text/>
            <Text style={styles.getStartedText}>Submit a proposal for what the title should be! 
            {'\n'}{'\n'}Click on the story tab below to see the current content of the story.
            {'\n'}{'\n'}Voting will begin once we have received four submissions.{'\n'}</Text>

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

    else if (currentFragments !== undefined && currentStory !== undefined && currentFragments.length >= 4 && !trigger){
      return (
        <View>
            <Text/>
            <Text style={styles.getStartedHeader}>Story Title: {currentStory.title}</Text>
            <Text/>
            <Text style={styles.getStartedText}>Vote on which user-submitted words should be added to the story! {'\n'}{'\n'}Here are the options: </Text>
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
    }

    else if (currentFragments !== undefined && currentStory !== undefined && currentFragments.length < 4 && !trigger){
      return (
        <View>
            <Text/>
            <Text style={styles.getStartedHeader}>Story Title: {currentStory.title}</Text>
            <Text/>
            <Text style={styles.getStartedText}>Please submit a proposal for the next part of the story! 
            {'\n'}{'\n'}Voting will begin once we have received four submissions.{'\n'}</Text>

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
    currentFragments: state.currentFragments,
    currentStoryContent: state.currentStoryContent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentStory: () => dispatch(getCurrentStory()),
    loadCurrentFragments: () => dispatch(getCurrentFragments()),
    addVote: (id) => dispatch(addVote(id)),
    submitProposal: (submission) => dispatch(submitProposal(submission)),
    completeVote: (id) => dispatch(completeVote(id)),
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
  getStartedHeader: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 34,
    textAlign: 'left',
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Vote)