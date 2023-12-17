import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import React , {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function App() {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('./img/bgsmall.jpg')} resizeMode='cover' style={styles.bg_image}>

        <View style={styles.textInputContainer}>
          <View style={styles.IconContainer}>
            <Icon name='mail' size={30} color={'#fff'}/>
          </View>  
          <TextInput
            placeholder='Enter your Email'
            style={styles.textInput}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.IconContainer}>
            <Icon name='person' size={30} color={'#fff'}/>
          </View>
          <TextInput
            placeholder='Enter your full name'
            style={styles.textInput}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.IconContainer}>
            <Icon name='phone-portrait' size={30} color={'#fff'}/>
          </View>
          <TextInput
            placeholder='Enter your phone no'
            style={styles.textInput}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.IconContainer}>
            <Icon name='key' size={30} color={'#fff'}/>
          </View>
          <TextInput
            placeholder='Enter your password'
            style={styles.textInput}
          />
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
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

  textInput: {
    width: width/100 * 60,
    paddingLeft: 5,
    marginTop: 5,
    elevation: 1.3
  },

  textInputContainer: {
    flexDirection: 'row',
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  button_container: {
    width: width / 100 * 60,
    marginTop: 10,
    marginLeft: 100,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#bdbfbf',
    width: width / 100 * 30,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 6,
    marginHorizontal: 10,
  },

  buttonText: {
    color: '#000',
    fontSize: 18,
  }
});
