import React from 'react'
import {
  ScrollView,
  View,
} from 'react-native'
import styles from '../public/styles'
import VoteMain from '../components/VoteMain'

export default class VoteScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.voteScreenContainer}>
        <ScrollView style={styles.voteScreenContainer} contentContainerStyle={styles.voteScreenContentContainer}>
            <View style={styles.voteScreenContainer}>
              <VoteMain/>
            </View>
        </ScrollView>
      </View>
    );
  }
}
