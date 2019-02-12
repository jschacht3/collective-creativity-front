import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {Button, Card, Header} from 'react-native-elements'
import { MonoText } from '../components/StyledText'

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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    color: 'rgba(0,0,0,0.4)'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
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
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
