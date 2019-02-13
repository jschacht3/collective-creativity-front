import React from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import styles from '../public/styles'
import {connect} from 'react-redux'
import {addVote} from '../store/story'

class VoteWords extends React.Component {

    constructor() {
      super()
      this.handleVoteClick = this.handleVoteClick.bind(this)
    }
  
    async handleVoteClick (id) {
      await this.props.addVote(id)
    }
  
    render() {

        const currentFragments = this.props.currentFragments
        const currentStory = this.props.currentStory

        return (
            <View>
                <Text/>
                <Text style={styles.voteHeader}>Story Title: {currentStory.title}</Text>
                <Text/>
                <Text style={styles.voteBody}>Vote on which user-submitted words should be added to the story! {'\n'}{'\n'}Here are the options: </Text>
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
}

const mapStateToProps = state => {
    return {
      currentStory: state.currentStory,
      currentFragments: state.currentFragments
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addVote: (id) => dispatch(addVote(id))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(VoteWords)