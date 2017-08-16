import React, { Component } from 'react';
import { Text } from 'react-native';
import { currencyData } from './data';

class CurrencyFormatter extends Component {

  /* Props that this component is able to receive: 
		currencyCode: String => Currency Code (data needs to be edited in its config file)
		style: Object => Text style
		value: Int => Value amount
	*/

  static defaultProps = {
    currencyCode: 'USD',
    style: null,
    value: 0
  }
  
  formatCurrency = () => {
    const currencyInfo = currencyData[this.props.currencyCode];
    const decimalFormattedValue = (this.props.value / 100).toFixed(currencyInfo.decimals);
    
    if (currencyInfo.type === 'prefix') {
      return currencyInfo.sign + decimalFormattedValue;
    }
    return decimalFormattedValue + currencyInfo.sign;
  }

  render() {
    // const formatCurrency = this.context.globalize.getCurrencyFormatter(currency, other);
    // const formattedCurrency = (typeof value === 'number') ? formatCurrency(value) : '';

    return (
      <Text style={this.props.style}>
        {this.formatCurrency()}
      </Text>
    );
  }
}

export default CurrencyFormatter;
