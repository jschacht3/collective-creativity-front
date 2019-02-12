import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import Story from '../components/Story'
import styles from '../public/styles'

export default class StoryScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.storyScreenContainer}>
        <ScrollView style={styles.storyScreenContainer} contentContainerStyle={styles.storyScreenContentContainer}>
            <View style={styles.storyScrenContainer}>
              <Story/>
            </View>
        </ScrollView>
      </View>
    );
  } 
}
