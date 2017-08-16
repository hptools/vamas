import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { cellStyles } from './cellStyles';

class CheckboxCell extends Component {

	/* ToDo: Provisional Checkbox, really don't like the way
		it plays around */
	
	/* Props that this component is able to receive: 
		cellHeight: Int => Cell height
		mainText: String => Cell title
		icon: Require Image (optional) => Icon name for react-native-vector-icons
		checkboxValue: Bool => Checkbox on (true) or off (false)
		checkboxStyle: Style objcet => Styles to apply to the checkbox
		onPress: () => {} => Callback for tapping the cell
	*/

	static defaultProps = {
		cellHeight: 44,
    mainText: '',
		checkboxValue: false
	}
	
	constructor(props) {
		super(props);

		this.state = {
      checkboxValue: props.checkboxValue
    };
	}
	

	renderText = () => (
		<Text style={cellStyles.standaloneMainText}>
			{this.props.mainText}
		</Text>
	);

	renderImage = () => {
		if (this.props.icon) {
			return (
				<Image 
					style={cellStyles.leftIcon}
					source={this.props.icon}
				/>
			);
		}
		return;
	}
	
  render() {
    return (
			<View style={[cellStyles.cellContainer, { height: this.props.cellHeight }]}>
				<View style={cellStyles.cellContent}>
					<View style={cellStyles.textWithIconContainer}>
						{this.renderImage()}
						{this.renderText()}
					</View>
					<CheckBox
						style={cellStyles.checkbox}
						checked={this.state.checkboxValue}
						checkedIcon='dot-circle-o'
						uncheckedIcon='circle-o'
						onPress={() => {
							this.setState({ checkboxValue: !this.state.checkboxValue });
							this.props.onPress();
						}}
					/>
				</View>

				<View style={cellStyles.cellBottomShadow} />
			</View>
    );
  }
}

export default CheckboxCell;
