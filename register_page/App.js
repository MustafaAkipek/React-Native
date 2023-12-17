import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React , {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function App() {
  return (
    <View style={styles.container}>

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
  }
});
