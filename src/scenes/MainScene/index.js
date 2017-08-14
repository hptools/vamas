import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { universalStyles } from '../../styles/UniversalStyles';
import styles from './styles';

class MainScene extends Component {

  render() {
    return (
      <View style={universalStyles.container}>
        <Text style={styles.text}>Home Scene</Text>
      </View>
    );
  }
}

export default MainScene;
