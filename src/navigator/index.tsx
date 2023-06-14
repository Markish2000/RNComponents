import {createStackNavigator} from '@react-navigation/stack';

import {CustomSectionListScreen} from '../screens/CustomSectionListScreen';
import {InfiniteSCrollScreen} from '../screens/InfiniteScrollScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {SlidesScreen} from '../screens/SlidesScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteSCrollScreen}
      />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
    </Stack.Navigator>
  );
};
