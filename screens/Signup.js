import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Signup extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Image source={require('../assets/images/bg.jpg')} style={{ width: '100%', height: '100%', position: 'absolute', resizeMode: 'cover' }}/>
          <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: '55%', marginVertical: '10%', width: '80%' }}>

            <KeyboardAvoidingView behavior='position' style={{ flex: 1 }}>
              <TextInput placeholder='username' placeholderTextColor='#6b7887' style={{ marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#6b7887', color: 'white' }} />
              <TextInput placeholder='email' placeholderTextColor='#6b7887' style={{ marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#6b7887', color: 'white' }} />
              <TextInput placeholder='password' secureTextEntry={true} placeholderTextColor='#6b7887' style={{ marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#6b7887', color: 'white' }} />
            </KeyboardAvoidingView>


              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Main', {})
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 100,
                    paddingVertical: 10,
                   }}>
                <Text style={{ color: 'white', fontSize: 17 }}>Singup</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: .1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Login', {})
                  }}
                  >
                <Text style={{ color: 'white', fontSize: 17 }}>already have an account?</Text>
                </TouchableOpacity>
              </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
