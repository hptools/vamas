import { StyleSheet } from 'react-native';
import Colors from '../config/Colors';

export const universalStyles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  headerButton: {
    marginLeft: 16
  },
  headerButtonImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  },
  sectionContainer: {
    backgroundColor: '#cbebee',
    height: 38,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sectionTitle: {
    marginLeft: 16,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#848484'
  },
  primaryButtonStyle: {
    width: 311,
    height: 41,
    borderRadius: 4,
    backgroundColor: Colors.primaryColor
  },
  primaryButtonTextStyle: {
    color: '#ffffff',
    fontWeight: '500'
  },
  secondaryButtonStyle: {
    width: 311,
    height: 41,
    borderRadius: 4,
    backgroundColor: Colors.secondaryColor
  },
  secondaryButtonTextStyle: {
    color: Colors.secondaryColorContrast,
    fontWeight: '500'
  }
});
