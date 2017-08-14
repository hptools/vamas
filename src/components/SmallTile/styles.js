import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  view: {
    borderRadius: 4,
    height: 180,
    overflow: 'hidden',
    flexDirection: 'column'
  },
  image: {
    flex: 3
  },
  dataView: {
    flex: 2
  },
  text: {
    // fontFamily: 'OpenSans',
    textAlign: 'left',
    color: '#484848',
    paddingTop: 3,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 3,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
  },
  middleTitleText: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 12,
    fontWeight: '400',
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: '300',
    paddingTop: 3,
    paddingBottom: 0
  },
  subtitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonDisabled: {
    backgroundColor: '#dfdfdf'
  },
  textDisabled: {
    color: '#a1a1a1'
  },
  container: {
    backgroundColor: 'transparent',
    flex: 2,
    marginLeft: 3,
    marginRight: 3,
    alignSelf: 'stretch',
    
  },
  containerShadow: Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 1,
      shadowOpacity: 0.5
    },
    android: {
      elevation: 4
    }
  })
});
