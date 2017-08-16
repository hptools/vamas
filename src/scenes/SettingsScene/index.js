import React, { Component } from 'react';
import { 
  View,
  Text,
} from 'react-native';
import { universalStyles } from '../../styles/UniversalStyles';

class SettingsScene extends Component {
  render() {
    return (
      <View style={universalStyles.sceneContainer}>
        <Text>This is the Settings Scene</Text>
      </View>
    );
  }
}

export default SettingsScene;
