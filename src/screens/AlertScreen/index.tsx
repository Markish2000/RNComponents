import {Alert, View, Button} from 'react-native';
import {HeaderTitle} from '../../components/HeaderTitle';
import {styles} from '../../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('Cancel Pressed'),
      },
    );
  };

  //!! SÓLO ANDA EN IOS.
  const showPrompt = () => {
    Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir',
      (valor: string) => console.log(`Info: ${valor}`),
      'plain-text',
      'Hola Mundo',
      'number-pad',
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};
