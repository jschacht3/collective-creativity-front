import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Vote from '../components/Vote'

export default class VoteScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
              <Vote/>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10
  },
  contentContainer: {
    paddingTop: 30,
  }
});