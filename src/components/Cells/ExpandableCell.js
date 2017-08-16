import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Image, 
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cellStyles } from './cellStyles';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

class ExpandableCell extends Component {

	/* Props that this component is able to receive: 
		cellHeight: Int => Cell height
		subcellHeight: Int => Subcells height when expanded
		selectedSubcell: Int => Index of the selected subcell
		options: [String] => String array with the options to show
		mainText: String => Cell title
		chevron: Bool => Show or hide chevron. Default true
		onPressSubcell: (index) => {} => Callback for tapping the subcell
		capitalizeFirstLetter: Bool => Default true, capitalize first letter of the subcells
	*/

	static defaultProps = {
		cellHeight: 70,
		subcellHeight: 30,
		selectedSubcell: 0,
		options: [],
    mainText: '',
		chevron: true,
		capitalizeFirstLetter: false,
		onPressSubcell: () => {}
	}

	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false,
      switchValue: props.switchValue,
			selectedValue: this.props.selectedSubcell
    };
	}

	toggleExpansion = () => {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}

	calculateHeight() {
		if (this.state.isExpanded) {
			const { cellHeight, subcellHeight, options } = this.props;
			const totalHeight = cellHeight + (options.length * subcellHeight);
			return totalHeight;
		}
		return this.props.cellHeight;
	}

	renderLabel = (text) => {
		if (text !== undefined) {
			return ((this.props.capitalizeFirstLetter) ? capitalizeFirstLetter(text) : text);
		}
	}

	renderSubcells = () => {
		if (this.state.isExpanded) {
			return Object.keys(this.props.options).map(id => (
				<TouchableOpacity
					key={id}
					onPress={() => { 
						this.setState({
							selectedValue: id,
							isExpanded: false
						});
						this.props.onPressSubcell(id); 
					}}
				>
					<View	
						style={[cellStyles.expandableCell.subcell, { height: this.props.subcellHeight }]}
					>
						<Text>{this.renderLabel(this.props.options[id])}
						</Text>
					</View>
				</TouchableOpacity>
			));
		}
		return null;
	}

	renderRightLabelText = () => {
		if (this.props.amountText) {
			return (
				<Text style={cellStyles.amountText} >
					{this.props.amountText}
				</Text>
			);
		}
	}

	renderChevron = () => {
		if (this.props.chevron) {
			return (
				<Icon 
					name="chevron-down"
					style={cellStyles.chevronImage}
				/>
			);
		}
		return null;
	}

  render() {
    return (
			<TouchableOpacity 
				onPress={this.toggleExpansion}
			>			
				<View 
					style={[cellStyles.cellContainer, { height: this.calculateHeight() }]}
				>
					<View style={cellStyles.cellContent}>
						<View style={[cellStyles.textWithIconContainer, cellStyles.lefTextWithIconContainer]}>
							<View>
								<Text style={cellStyles.expandableCell.mainText}>
									{this.props.mainText}
								</Text>
								<Text style={cellStyles.expandableCell.detailText}>
									{this.renderLabel(this.props.options[this.state.selectedValue])}
								</Text>
							</View>
							{this.renderChevron()}
						</View>
					</View>
					{this.renderSubcells()}
					<View style={cellStyles.cellBottomShadow} />
				</View>
			</TouchableOpacity>
    );
  }
}

export default ExpandableCell;
