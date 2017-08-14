import React, { Component } from 'react';
import { 
  Platform, 
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import { CachedImage } from 'react-native-img-cache';
import { styles } from './styles';

class SFSmallTile extends Component {

  static propTypes = {
    /**
     * Title text to display on the tile
     */
    title: React.PropTypes.string.isRequired,
    /**
     * Middle title text to display on the tile
     */
    middleTitle: React.PropTypes.string.isRequired,
    /**
     * Title text to display as subtitle at the left
     */
    leftSubtitle: React.PropTypes.string.isRequired,
    /**
     * Title text to display as subtitle at the right
     */
    rightSubtitle: React.PropTypes.string.isRequired,
    /**
     * The image url that will be loaded on the tile
     */
    imageUrl: React.PropTypes.string,
    /**
     * If tile supports favourite, the state of the tile
     */
    favourite: React.PropTypes.bool,
    /**
     * If true, disable all interactions for this component.
     */
    disabled: React.PropTypes.bool,
    /**
     * Handler to be called when the user taps the button
     */
    onPress: React.PropTypes.func.isRequired,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: React.PropTypes.string,
    /**
     * Text to display for blindness accessibility features
     */
    accessibilityLabel: React.PropTypes.string
  };

  render() {
    const {
      accessibilityLabel,
      color,
      imageUrl,
      onPress,
      title,
      middleTitle,
      leftSubtitle,
      rightSubtitle,
      disabled,
      testID,
      // favourite
    } = this.props;

    const dataViewStyles = [styles.dataView];
    const imageStyles = [styles.image];
    const viewStyles = [styles.view];
    const titleTextStyles = [styles.text, styles.titleText];
    const middleTitleTextStyles = [styles.text, styles.middleTitleText];
    const subtitleTextStyles = [styles.text, styles.subtitleText];
    const containerStyle = [styles.container, styles.containerShadow];
    const subtitleContainer = [styles.subtitleContainer];
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    viewStyles.push({ backgroundColor: color || '#2196F3' });

    if (disabled) {
      viewStyles.push(styles.buttonDisabled);
      titleTextStyles.push(styles.textDisabled);
      subtitleTextStyles.push(styles.textDisabled);
    }
    
    const accessibilityTraits = ['button'];
    if (disabled) {
      accessibilityTraits.push('disabled');
    }

    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityLabel={accessibilityLabel || ''}
        accessibilityTraits={accessibilityTraits || ''}
        style={containerStyle}
        testID={testID || ''}
        disabled={disabled || false}
        onPress={onPress}
      >
        <View style={viewStyles}>
          <CachedImage
            style={imageStyles}
            source={{ uri: imageUrl }}
          />
          <View style={dataViewStyles}>
            <Text style={titleTextStyles} disabled={disabled || ''}>{title}</Text>
            <Text style={middleTitleTextStyles} disabled={disabled || ''}>{middleTitle}</Text>
            <View style={subtitleContainer}>
              <Text style={subtitleTextStyles} disabled={disabled || ''}>{leftSubtitle}</Text>
              <Text style={subtitleTextStyles} disabled={disabled || ''}>{rightSubtitle}</Text>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }

}

export default SFSmallTile;
