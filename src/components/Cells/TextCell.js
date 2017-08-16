import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cellStyles } from './cellStyles';

const { width } = Dimensions.get('window');

class TextCell extends Component {
  /* Props that this component is able to receive: 
		cellHeight: Int => Cell height
		mainText: String => Cell title
		detailText: String (optional) => Cell subtitle
		amountText: String (optional) => Cell right amount text
		amountCurreny: String (optional) => Cell right amount text
		icon: Require Image (optional) => Icon name for react-native-vector-icons
		onPress: () => {} => Callback for tapping the cell
	*/

  static defaultProps = {
    cellHeight: 44,
    mainText: '',
    onPress: () => { }
  };

  constructor(props) {
    super(props);

    this.state = {
      switchValue: props.switchValue
    };
  }

  renderText() {
    if (
      this.props.detailText !== undefined && this.props.detailText.length > 0
    ) {
      return (
        <View>
          <Text
            style={cellStyles.detailText}
          >
            {this.props.detailText}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Animated.View style={cellStyles.cellContainer}>
        <View
          style={cellStyles.textCellContent}
        >
          {this.renderText()}
        </View>
        <View style={cellStyles.cellBottomShadow} />
      </Animated.View>
    );
  }
}

export default TextCell;
