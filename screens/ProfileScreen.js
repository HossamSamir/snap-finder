import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#2ecc71' }}>Profile screen</Text>
          <TouchableOpacity
            onPress={ this._handleLogout }
            style={{  width: '50%', margin: 30, backgroundColor: 'crimson', }}>
            <Text style={{ color: 'white', padding: 20, borderRadius: 10, fontSize: 23, textAlign: 'center' }}>Logout</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
