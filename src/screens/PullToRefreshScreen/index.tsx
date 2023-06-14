import {useState} from 'react';

import {View, ScrollView, RefreshControl} from 'react-native';

import {HeaderTitle} from '../../components/HeaderTitle';

import {styles} from '../../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
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
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orage']}
          //!! SOLO EN IOS
          style={{backgroundColor: '#5856D6'}}
          tintColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
