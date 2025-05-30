import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Platform } from 'react-native';
 // Previne que a splash screen suma automaticamente
SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const router = useRouter();
  Platform.OS === 'android' && SplashScreen.hideAsync();
Platform.OS === 'ios' && SplashScreen.hideAsync();
Platform.OS === 'web' && SplashScreen.hideAsync();




  useEffect(() => {
    const loadResources = async () => {
      // Simular carregamento de recursos
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Oculta a splash screen nativa
      await SplashScreen.hideAsync();

      // Redireciona para a tela principal
      router.replace('/auth/register');
    };

    loadResources();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Image source={require('../assets/images/splash.png')} style={{ width: 200, height: 200 }} />
        {'\n'}

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE5DD',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
});
