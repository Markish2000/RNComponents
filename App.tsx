import 'react-native-gesture-handler';

import {Navigator} from './src/navigator';

import {ThemeProvider} from './src/context/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'string',
//     background: 'black',
//     card: 'string',
//     text: 'string',
//     border: 'string',
//     notification: 'string',
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => <ThemeProvider>{children}</ThemeProvider>;

export default App;
