import {View, TextInput} from 'react-native';

import {HeaderTitle} from '../../components/HeaderTitle';

import {styles} from '../../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput />
    </View>
  );
};
