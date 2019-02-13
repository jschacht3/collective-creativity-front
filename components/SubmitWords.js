import React from 'react'
import {Text, View, TextInput} from 'react-native'
import {Button} from 'react-native-elements'
import styles from '../public/styles'
import {connect} from 'react-redux'
import {getCurrentFragments, submitProposal} from '../store/story'

class SubmitWords extends React.Component {

    constructor() {
        super()
        this.state = {
          submission: ''
        }
        this.handleProposalSubmission = this.handleProposalSubmission.bind(this)
      }
    
      async handleProposalSubmission () {
        await this.props.submitProposal(this.state)
        this.setState({
          submission: ''
        })
        await this.props.loadCurrentFragments()
      }

    render(){

        const currentFragments = this.props.currentFragments
        const currentStory = this.props.currentStory
        
        return (
            <View>
                <Text/>
                <Text style={styles.voteHeader}>Story Title: {currentStory.title}</Text>
                <Text/>
                <Text style={styles.voteBody}>Please submit a proposal for the next part of the story! 
                {'\n'}{'\n'}Voting will begin once we have received four submissions.{'\n'}</Text>
    
                <Text style={styles.voteBody}>Submit a Proposal: </Text>
                
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} maxLength={40}
                    onChangeText={(submission) => this.setState({submission})} value={this.state.submission}
                />
                
                <Button type="button" title={'Submit'} onPress={this.handleProposalSubmission}/>
    
                <Text style={styles.voteBody}>{'\n'}Here are the proposals submitted so far:{'\n'}</Text>
    
                {currentFragments.map(fragment => 
                  <View key={fragment.id}>
                    <Button type="button" title={fragment.words + '\n \n Votes: ' + fragment.votes}/>
                    <Text/>
                  </View>
                )}
            </View>
          )
    }
}

const mapStateToProps = state => {
    return {
        currentFragments: state.currentFragments,
        currentStory: state.currentStory
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        loadCurrentFragments: () => dispatch(getCurrentFragments()),
        submitProposal: (submission) => dispatch(submitProposal(submission)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SubmitWords)