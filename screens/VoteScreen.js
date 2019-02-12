import React from 'react'
import {
  ScrollView,
  View,
} from 'react-native'
import styles from '../public/styles'
import Vote from '../components/Vote'

export default class VoteScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.voteScreenContainer}>
        <ScrollView style={styles.voteScreenContainer} contentContainerStyle={styles.voteScreenContentContainer}>
            <View style={styles.voteScreenContainer}>
              <Vote/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
