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

class BasicCell extends Component {
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

  renderImage = () => {
    if (this.props.icon) {
      return <Image style={cellStyles.leftIcon} source={this.props.icon} />;
    }
  };

  renderText() {
    if (
      this.props.detailText !== undefined && this.props.detailText.length > 0
    ) {
      return (
        <View>
          <Text
            style={[cellStyles.mainText, this.props.boldText ? cellStyles.boldText : null]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {this.props.mainText}
          </Text>
          <Text
            style={[cellStyles.detailText, this.props.boldText ? cellStyles.boldText : null]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {this.props.detailText}
          </Text>
        </View>
      );
    }
    return (
      <Text
        style={[cellStyles.standaloneMainText, this.props.boldText ? cellStyles.boldText : null]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {this.props.mainText}
      </Text>
    );
  }

  renderRightLabelText = () => {
    if (this.props.amountText) {
      return (
        <Text style={[cellStyles.amountText, this.props.boldText ? cellStyles.boldText : null]}>
          {this.props.amountCurrency + (this.props.amountText / 100).toFixed(2)}
        </Text>
      );
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Animated.View
          style={[
            cellStyles.cellContainer,
            { height: this.props.cellHeight }
          ]}
        >
          <View style={cellStyles.cellContent}>

            <View
              style={[
                cellStyles.textWithIconContainer,
                cellStyles.lefTextWithIconContainer
              ]}
            >
              {this.renderImage()}
              {this.renderText()}
            </View>
            <View
              style={[
                cellStyles.textWithIconContainer,
                cellStyles.rightTextWithIconContainer
              ]}
            >
              {this.renderRightLabelText()}
            </View>
          </View>

          <View style={cellStyles.cellBottomShadow} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default BasicCell;
