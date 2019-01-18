import React from 'react';
import { Icon } from 'expo';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/Colors';

export default class Vote extends React.Component {

  render() {
    console.log("BLAH")
    const testSong = {
      name: 'HeyYo',
      music: ['a', 'c', 'e', 'f']      
    }
    return (
      <Text>Please vote for the next note in song {testSong.name}!</Text>
    );
  }
}