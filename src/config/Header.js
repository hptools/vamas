import { Platform } from 'react-native';
import Colors from './Colors';

export const HeaderStyle = Platform.select({
  ios: {
    backgroundColor: Colors.navBarColor,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  android: {
    backgroundColor: Colors.navBarColor,
    elevation: 4
  }
});

export const HeaderTitleStyle = {
  color: Colors.navBarTextColor
};
