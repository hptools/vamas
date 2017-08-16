import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Platform
} from 'react-native';
import CurrencyFormatter from '../CurrencyFormatter';
import { cellStyles } from './cellStyles';

class AmountInputCell extends Component {

	/* Props that this component is able to receive: 
		cellHeight: Int => Cell height
		mainText: String => Cell title
		inputPlaceholder: String => Text for the input placeholder
		inputText: String => Text for the text input
		keyboardType: String => Keyboard type to use, see TextInput keyboardType prop
		onFocus: () => {} => Callback called when the text input is focused
		onChangeText: () => {} => Callback for text changing (apply any kind of formatting)
															You can assign the value back to your scene here or in onEndEditing
		onEndEditing: (text) => {} => Call back to assign new value back to your scene
	*/

	static defaultProps = {
		cellHeight: 70,
		mainText: '',
		keyboardType: 'default',
		onChangeText: (text) => text,
		onFocus: () => { },
		onEndEditing: () => { }
	}

	constructor(props) {
		super(props);

		this.state = {
			text: this.props.detailText || '',
			inputText: this.props.inputText || '',
			currencyFormatter: React.createElement(
				CurrencyFormatter,
				{
					currencyCode: 'EUR',
					value: 0
				},
				null
			)
		};
	}

	render() {
		//ToDo Apply CurrencyFormatter in here. Not sure the best way.
		return (
			<View style={[cellStyles.cellContainer, { height: this.props.cellHeight }]}>
				<View style={Platform.OS === 'android' ? cellStyles.androidAmountInputcell.cellContent : cellStyles.amountInputCell.cellContent}>
					<Text style={Platform.OS === 'android' ? cellStyles.androidAmountInputcell.mainText : cellStyles.amountInputCell.mainText}>
						{this.props.mainText}
					</Text>
					<KeyboardAvoidingView style={Platform.OS === 'android' ? { top: 10 } : null} >
						<TextInput
							style={Platform.OS === 'android' ? cellStyles.androidAmountInputcell.inputText : cellStyles.amountInputCell.inputText}
							onChangeText={(text) => {
								this.setState({ text: this.props.onChangeText(text) });
							}}
							underlineColorAndroid={'transparent'}
							onFocus={(event) => { this.props.onFocus(event); }}
							value={this.props.inputText}
							keyboardType={this.props.keyboardType}
							onEndEditing={() => {
								this.props.onEndEditing(this.state.text);
							}}
						/>
					</KeyboardAvoidingView>
				</View>
				{!this.props.noShadow ? <View style={cellStyles.cellBottomShadow} />
					: null}
			</View>
		);
	}
}

export default AmountInputCell;
