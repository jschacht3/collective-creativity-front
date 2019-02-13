/* eslint-disable complexity */
import React from 'react'
import {getCurrentStory, getCurrentFragments, completeVote, getStoryContent} from '../store/story'
import {Text} from 'react-native'
import {connect} from 'react-redux'
import VoteTitle from './VoteTitle'
import SubmitTitle from './SubmitTitle'
import VoteWords from './VoteWords'
import SubmitWords from './SubmitWords'

class VoteMain extends React.Component {

  constructor() {
    super()
    this.voteWinner = this.voteWinner.bind(this)
  }

  async componentDidMount () {
    await this.props.loadCurrentFragments()
    await this.props.loadCurrentStory()
    await this.props.loadStoryContent()
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

    //determines if voting is complete
    let trigger = false
    let voteLeader
    for (let i = 0; i < currentFragments.length; i++) {
      if (currentFragments[i].votes >= 10){ 
        trigger = true
        voteLeader = currentFragments[i]
      }
    }
    if (trigger) this.voteWinner(voteLeader.id)

    if (currentStory !== undefined && currentStory.title === null && currentFragments && currentFragments.length >= 4 && !trigger) {
      return (
        <VoteTitle/>
      )
    }

    else if (currentStory !== undefined && currentFragments !== undefined && currentFragments.length >= 4 && !trigger){
      return (
        <VoteWords/>
      )
    }

    else if (currentStory !== undefined && currentStory.title === null && !trigger){
      return (
        <SubmitTitle/>
      )
    } 

    else if (currentStory && currentFragments !== undefined && !trigger){
      return (
        <SubmitWords/>
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
    completeVote: (id) => dispatch(completeVote(id)),
    loadStoryContent: () => dispatch(getStoryContent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteMain)