import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#8e44ad' }}>Search screen</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
