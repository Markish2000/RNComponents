import {useContext, useState} from 'react';

import {View, ScrollView, RefreshControl} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HeaderTitle} from '../../components/HeaderTitle';

import {ThemeContext} from '../../context/ThemeContext';

import {styles} from '../../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {top} = useSafeAreaInsets();
  const {
    theme: {colors, dividerColor, dark},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData('Hola Mundo');
    }, 1500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          //!! SOLO EN ANDROID
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          //!! SOLO EN IOS
          // style={{backgroundColor: '#5856D6'}}
          tintColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
