import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';

import {useForm} from '../../hooks/useForm';

import {CustomSwitch} from '../../components/CustomSwitch';
import {HeaderTitle} from '../../components/HeaderTitle';

import {styles} from '../../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su e-mail"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            keyboardAppearance="dark"
          />
          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>Suscribirse:</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su teléfono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
