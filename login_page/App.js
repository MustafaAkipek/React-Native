import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'; 
import React , {useState} from 'react' // kullanıcı bilgisi kaydetmek için
import Icon from 'react-native-vector-icons/Ionicons' // icon kullanmak için


const width = Dimensions.get('window').width; // ekran genişliğini almak için
const height = Dimensions.get('window').height; // ekran yüksekliğini almak için

export default function App() {

  const [PASS, setPASS ] = useState('1234') // şifreyi belirledik 
  const [MAIL, setMAIL ] = useState('mustafa@gmail.com') // maili belirledik

  return (

    <View style={styles.container}>

      <ImageBackground source={require('./img/bgsmall.jpg')} resizeMode='cover' style={styles.bg_image}>
        <View style={styles.textInputContainer}> 

          <View style={styles.IconContainer}>
            <Icon name = 'person' size={30} color={'#fff'}/>
          </View>
          
          <TextInput
            placeholder = 'E-Mail'
            style = {styles.textInput}
          />
        </View>

        <View style={styles.textInputContainer}>

          <View style={styles.IconContainer}>
            <Icon name = 'key' size={30} color={'#fff'}/>
          </View>

          <TextInput
            placeholder = 'Password'
            style = {styles.textInput}
          />
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, // container alanının ne kadar yer kaplayacağını belirler flex değeri 1 olduğu için tüm containerlar ile eşit olarak alanı bölüşür
    alignItems: 'center', // yatay hizalama
    justifyContent: 'center', // dikey hizalama
  },

  textInput: {
    width: width/100 * 60,
    paddingLeft: 5,
    marginTop: 5,
    elevation: 1.3
  },

  textInputContainer: {
    flexDirection: 'row', // aynı satırda göstermek için
    justifyContent: 'center',
    marginVertical: 5,
  },

  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdbfbf',
    width: 60,
    height: 60,
  },

  bg_image: {
    flex: 1,
    width: width,
    alignItems: 'center', // yatay hizalama
    justifyContent: 'center', // dikey hizalama
  }
});
