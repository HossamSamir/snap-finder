import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { Ionicons } from '@expo/vector-icons';
import { List, ListItem } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
      [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 1
        },
        {
          name: 'Hossam Samir',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 2
        },
      ],
      [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 3
        },
        {
          name: 'Hossam Samir',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 4
        },
      ],
      [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 5
        },
        {
          name: 'Hossam Samir',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 6
        },
      ],
    ],
      size: { width, height },
    }
  }
  static navigationOptions = {
    header: null,
  };
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          delay={3000}
          bullets={true}
          style={{ width, height: 200 }}
          autoplay
        >
          <View style={[{ alignItems: 'center', backgroundColor: 'darkblue' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #1</Text></View>
          <View style={[{ alignItems: 'center', backgroundColor: 'red' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #2</Text></View>
          <View style={[{ alignItems: 'center', backgroundColor: 'crimson' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #3</Text></View>
        </Carousel>





          <List containerStyle={{flex: 1, flexDirection: 'row', marginTop: 30}}>
            <FlatList
              data = {this.state.users}
              renderItem = {({ item }) => (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, backgroundColor: 'red', margin: 10, height: 60 }}>

                  </View>
                  <View style={{ flex: 1, backgroundColor: 'red', margin: 10, height: 60 }}>

                  </View>
                </View>
              )}
              keyExtractor={item => item[0].id}
            />
          </List>



        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
