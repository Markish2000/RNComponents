import 'react-native-gesture-handler';
import {Navigator} from './src/navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
export default App;
