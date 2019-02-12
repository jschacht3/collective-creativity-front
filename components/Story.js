import React from 'react'
import {getCurrentStory, getCurrentFragments, getStoryContent} from '../store/story'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'
import styles from '../public/styles'

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
            <Text style={styles.storyHeader}>The story so far...</Text>
            <Text/> 
            <Text style={styles.storyBody}>As the voting continues, the proposed additions with the most votes will get added to the story! </Text>
            <Text/>
            <Text/>
            <Text style={styles.storyHeader}>{currentStory.title}</Text>
            <Text/>
            <Text style={styles.storyBody}>{content} </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Story)

