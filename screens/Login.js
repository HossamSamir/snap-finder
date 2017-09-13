import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'crimson' }}>Logo</Text>
        <TouchableOpacity
          onPress={() =>
            navigate('Main', {})
          }
          style={{  width: '50%', margin: 30, backgroundColor: 'crimson', }}>
          <Text style={{ color: 'white', padding: 20, borderRadius: 10, fontSize: 23, textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
