import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { fetchTests } from '../../actions/TestsActions';
import { DropdownCell } from '../../components/Cells';
import I18n from '../../assets/i18n/i18n';
import { universalStyles } from '../../styles/UniversalStyles';
import styles from './styles';

const ROW_HEIGHT = 44;

class MainScene extends Component {

  constructor(props) {
		super(props);
		
		const ds = new ListView.DataSource({ 
			rowHasChanged: (r1, r2) => r1 !== r2,
    });
    
		this.state = {
      fadeAnim: new Animated.Value(1),
			sizeAnim: new Animated.Value(100),
      listHeightAnim: new Animated.Value(0),
      dataSource: ds,
      testsDataSource: ds.cloneWithRows(this.props.tests),
      selectedTest: null   
		};
  }
  
  componentWillMount() {
		this.props.fetchTests();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        selectedTest: nextProps.tests[0],
        testsDataSource: this.state.dataSource.cloneWithRows(nextProps.tests)
      });
    }
  }

	toggleTestsList = (open = true) => {
		let toValue = 0;
		if ((this.state.listHeightAnim._value === 0) && (open)) {
			toValue = this.props.tests.length * ROW_HEIGHT;
		}

		Animated.timing(
			this.state.listHeightAnim,
			{
				toValue,
				duration: 400,
			}
		).start();
  }
  
  renderTestRow = (rowData) => (
		<DropdownCell
			cellHeight={ROW_HEIGHT}
			mainText={rowData.name}
			onPress={() => {
				this.setState({
					selectedTest: rowData
				});
				this.toggleTestsList();
			}}
		/>
  )
  
  renderTestSelection = () => (
    <TouchableOpacity
      onPress={() => {
        this.toggleTestsList();
      }}
    >
      <View style={styles.testSelector}>
        <View style={styles.selectorRow}>
          <Text style={styles.selectedText}>
            {this.state.selectedTest ? this.state.selectedTest.name : ''}
          </Text>
        </View>
        <Image
          source={require('../../assets/img/chevron_dropdown.png')}
          style={styles.dropDownChevron}
        />
      </View>
    </TouchableOpacity>
  )

  renderTestsDropDow = () => (
    <Animated.View style={[styles.testsDropDown, { height: this.state.listHeightAnim }]}>
      <ListView
        style={{ flex: 1 }}
        dataSource={this.state.testsDataSource}
        renderRow={this.renderTestRow}
        enableEmptySections
        removeClippedSubviews={false}
      />
    </Animated.View>
  )

  renderDescription = () => (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>
        {this.state.selectedTest ? this.state.selectedTest.description : ''}
      </Text>
    </View>
  )
  
  render() {
    return (
      <TouchableWithoutFeedback 
        onPress={() => {
          this.toggleTestsList(false);
        }}
      >
        <View style={universalStyles.sceneContainer}>
          {this.renderTestSelection()}
          {this.renderTestsDropDow()}
          {this.renderDescription()}
          <View style={styles.buttonContainer}>
            <Button
              title={I18n.t('continue')}
              buttonStyle={universalStyles.primaryButtonStyle}
              textStyle={universalStyles.primaryButtonTextStyle}
              onPress={() => {
                console.log('Did press button');
              }}
            />
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
	const { tests, isLoading } = state.tests;
	return { tests, isLoading };
};

export default connect(mapStateToProps, { fetchTests })(MainScene);
