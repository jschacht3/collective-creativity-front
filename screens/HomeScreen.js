import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
              <View style={styles.welcomeContainer}>
                <Text style={styles.getStartedHeader}>
                    Welcome to Collective Creativity! {'\n'}  
                </Text>
              </View>
              <View>
                <Text style={styles.getStartedText}>
                    Collective Creativity is a tool for writing a story together...with democracy!{'\n'}
                </Text>
              </View>
              <View>
                <Text style={styles.getStartedText}>
                    Click on 'Vote' below to start voting. {'\n'}
                </Text>
              </View>
              <View>
              <Text style={styles.getStartedText}>
                  Click on 'Story' below to see the story so far... 
              </Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)',
    marginTop: 50
  }, 
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10, 
    marginLeft: 10
  },
  getStartedHeader: {
    fontSize: 25,
    color: 'rgba(248,248,248,1)',
    lineHeight: 24,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(248,248,248,1)',
    lineHeight: 24,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  }
});
