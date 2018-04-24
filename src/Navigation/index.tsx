import { StackNavigator, SwitchNavigator } from 'react-navigation';
import Auth from '../Auth';
import Home from '../Home';

export const AuthNavigator = StackNavigator({
  Authentication: {
    screen: Auth,
  },
});

export const SignedInNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
});

const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedInNavigator,
      },
      SignedOut: {
        screen: AuthNavigator,
      },
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    },
  );
};

export default createRootNavigator;