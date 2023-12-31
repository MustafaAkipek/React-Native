import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput } from 'react-native';


const width = Dimensions.get('window').width;


export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./img/background.png')} resizeMode='cover' style={styles.bg_image}>
        <Text style={styles.text}>Login</Text>

        <TextInput
          placeholder = 'E-Mail'  
        />

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bg_image: {
    flex: 1,
    width: width,
    alignItems: 'center', // yatay hizalama
    justifyContent: 'center', // dikey hizalama
  },

  text: {
    color: '#2F80ED',
    fontSize: 36,
    fontStyle: 'normal',
    width: 338,
    height: 67,
    fontWeight: '700'
  }
});
