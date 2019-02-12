import React from 'react'
import {
  ScrollView,
  Text,
  View,
} from 'react-native'
import styles from '../public/styles'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.homeScreenContainer}>
        <ScrollView style={styles.homeScreenContainer} contentContainerStyle={styles.homeScreenContentContainer}>

          <View style={styles.homeScreenWelcomeContainer}>
              <View style={styles.homeScreenWelcomeContainer}>
                <Text style={styles.homeScreenGetStartedHeader}>
                    Welcome to Collective Creativity! {'\n'}  
                </Text>
              </View>
              <View>
                <Text style={styles.homeScreenGetStartedText}>
                    Collective Creativity is a tool for writing a story together...with democracy!{'\n'}
                </Text>
              </View>
              <View>
                <Text style={styles.homeScreenGetStartedText}>
                    Click on 'Vote' below to start voting. {'\n'}
                </Text>
              </View>
              <View>
              <Text style={styles.homeScreenGetStartedText}>
                  Click on 'Story' below to see the story so far... 
              </Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

