import React from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import styles from '../public/styles'
import {connect} from 'react-redux'
import {addVote} from '../store/story'

class VoteTitle extends React.Component {

    constructor() {
      super()
      this.handleVoteClick = this.handleVoteClick.bind(this)
    }
  
    async handleVoteClick (id) {
      await this.props.addVote(id)
    }
  
    render() {

        const currentFragments = this.props.currentFragments

        return (    
            <View>
                <Text/>
                <Text style={styles.voteBody}>Vote on what the story's title should be! {'\n'}{'\n'}Here are the user submitted proposals: </Text>
                <Text/>
                {currentFragments.map(fragment => 
                    <View key={fragment.id}>
                    <Button type="button" title={'"' + fragment.words + '"' + '\n \n Votes: ' + fragment.votes} onPress={() => this.handleVoteClick(fragment.id)}/>
                    <Text/>
                    </View>
                )}
            </View>   
        )
    }
}

const mapStateToProps = state => {
    return {
      currentFragments: state.currentFragments
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addVote: (id) => dispatch(addVote(id))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(VoteTitle)

