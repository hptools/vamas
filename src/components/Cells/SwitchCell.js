import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
import { cellStyles } from './cellStyles';
import Colors from '../../config/Colors';

class SwitchCell extends Component {

	/* Props that this component is able to receive: 
		cellHeight: Int => Cell height
		mainText: String => Cell title
		detailText: String (optional) => Cell subtitle
		switchValue: Bool => Switch initial value
		onSwitchChange: (value) => {} => Callback for switch onChanged
	*/

	static defaultProps = {
		cellHeight: 44,
    mainText: '',
		switchValue: false,
		onSwitchChange: () => {}
	}

	constructor(props) {
		super(props);

		this.state = {
      switchValue: props.switchValue
    };
	}
	
	renderText() {
		if (this.props.detailText !== undefined && this.props.detailText.length > 0) {
			return (
				<View>
					<Text style={cellStyles.switchCell.mainText}>
						{this.props.mainText}
					</Text>
					<Text style={cellStyles.detailText}>
						{this.props.detailText}
					</Text>
				</View>
			);
		}
		return (
			<Text style={cellStyles.standaloneMainText}>
				{this.props.mainText}
			</Text>
		);
	}

  render() {
    return (
			<View style={[cellStyles.cellContainer, { height: this.props.cellHeight }]}>
				<View style={cellStyles.cellContent}>
					{this.renderText()}
					<Switch
						value={this.state.switchValue}
						onTintColor={Colors.primaryColor}
						onValueChange={(newValue) => {
							this.setState({
								switchValue: newValue
							});
							this.props.onSwitchChange(newValue);
						}}
					/>
				</View>

				<View style={cellStyles.cellBottomShadow} />
			</View>
    );
  }
}

export default SwitchCell;
