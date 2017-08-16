import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import CurrencyFormatter from '../CurrencyFormatter';
import { cellStyles } from './cellStyles';

class DropdownCell extends Component {
  /* Props that this component is able to receive: 
		cellHeight: Int => Cell height
		mainText: String => Cell title
		detailText: String (optional) => Cell subtitle
		amountText: String (optional) => Cell right amount text. Minor units.
		amountCurrenyCode: String (optional) => Currency code to format the amount.
		icon: Require Image (optional) => Icon name for react-native-vector-icons
		onPress: () => {} => Callback for tapping the cell
	*/

  static defaultProps = {
    amountCurrenyCode: 'USD',
    cellHeight: 44,
    mainText: '',
    onPress: () => {}
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
            style={[cellStyles.mainText, {
							fontSize: 14,
							marginTop: 5
						}]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {this.props.mainText}
          </Text>
          <Text
						style={[cellStyles.detailText, {
							fontSize: 12,
							color: '#909090',
							marginTop: 0
						}]}
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
        style={cellStyles.standaloneMainText}
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
        <CurrencyFormatter
          currencyCode={this.props.amountCurrenyCode}
          style={cellStyles.amountText}
          value={parseInt(this.props.amountText, 0)}
        />
      );
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View
          style={[
            cellStyles.cellContainer,
            { 
							height: this.props.cellHeight,
							backgroundColor: 'white'
						}
          ]}
        >
          <View style={cellStyles.cellContent}>

            <View
              style={[
                cellStyles.textWithIconContainer,
                cellStyles.lefTextWithIconContainer,
								{ justifyContent: 'flex-start' }
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
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default DropdownCell;
