import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  footer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemContainer: {
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  testSelector: {
		height: 40,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
  },
  selectorRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
  },
  selectedText: {
    marginLeft: 16
  },
  dropDownChevron: {
		width: 22,
		resizeMode: 'contain',
		marginLeft: 16,
		marginRight: 16
  },
  testsDropDown: {
		position: 'absolute',
		top: 40,
		left: 0,
		width,
		zIndex: 400
  },
  descriptionContainer: {
    flex: 7,
    padding: 20,
    margin: 20
  },
  descriptionText: {
    color: 'white'
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
