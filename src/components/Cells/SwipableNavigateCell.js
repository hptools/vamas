import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
	TouchableOpacity,
	TouchableHighlight
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurrencyFormatter from '../CurrencyFormatter';
import { cellStyles } from './cellStyles';

class SwipableNavigateCell extends Component {
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
		onPress: () => {},
		onSwipeCellPress: () => {}
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
            style={cellStyles.mainText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {this.props.mainText}
          </Text>
          <Text
            style={cellStyles.detailText}
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
		const rightButtons = [
			<TouchableHighlight 
				style={[cellStyles.swipeButtons, { backgroundColor: '#00aaa5' }]}
				onPress={this.props.onSwipeCellPress}
			>
				<Text
					style={cellStyles.swipeButtonText}
					numberOfLines={2}
				>
					Create Installment
				</Text>
			</TouchableHighlight>,

			<TouchableHighlight style={[cellStyles.swipeButtons, { backgroundColor: '#f4d127' }]}>
				<Text style={cellStyles.swipeButtonText}>
					Share
				</Text>
			</TouchableHighlight>,

			<TouchableHighlight style={[cellStyles.swipeButtons, { backgroundColor: '#989898' }]}>
				<Text style={cellStyles.swipeButtonText}>
					More
				</Text>
			</TouchableHighlight>
		];

    return (
			<Swipeable rightButtons={rightButtons}>
				<TouchableOpacity onPress={this.props.onPress}>
					<View
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
								<Icon name="chevron-right" style={cellStyles.chevronImage} />
							</View>
						</View>

						<View style={cellStyles.cellBottomShadow} />
					</View>
				</TouchableOpacity>
			</Swipeable>
    );
  }
}

export default SwipableNavigateCell;
