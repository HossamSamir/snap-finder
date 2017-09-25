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
import { List, ListItem, SearchBar, Divider } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class SeacrhScreen extends React.Component {
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
      [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 7
        },
        {
          name: 'Hossam Samir',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 8
        },
      ],
      [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 9
        },
        {
          name: 'Hossam Samir',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
          id: 10
        },
      ],
    ],
      size: { width, height },
      heartIcon: 'ios-heart-outline'
    }
  }
  static navigationOptions = {
    header: null,
  };
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  _renderHeader = () => {
    return (
      <View>
        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 17, fontWeight: 'bold', color: 'grey' }}>Trending people:</Text>

          <List containerStyle={{flex: 1, flexDirection: 'row',}}>
            <FlatList
              horizontal={true}
              data = {this.state.users}
              renderItem = {({ item }) => (
                <View style={{  margin: 10,}}>
                  <Image
                    style={{height: 80, resizeMode: 'contain'}}
                    source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                  />
                <Text style={{  textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item[1].name}</Text>
                </View>
              )}
              keyExtractor={item => item[0].id}
            />
          </List>
      </View>
    )
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
        <SearchBar
          lightTheme
          clearIcon
          onChangeText={this._handleSearch}
          placeholder='Find someone...' />




          <List containerStyle={{flex: 1, flexDirection: 'row', marginTop: 30}}>
            <FlatList
              data = {this.state.users}
              renderItem = {({ item }) => (
                <View style={{ flex: 1, flexDirection: 'row',  }}>
                  <View style={{ flex: 1, margin: 10,  }}>
                    <Image
                      style={{ flex: 1, height: 150, resizeMode: 'contain'}}
                      source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                    />
                  <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item[0].name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                      <TouchableOpacity>
                        <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ flex: 1, margin: 10,  }}>
                    <Image
                      style={{ flex: 1, height: 150, resizeMode: 'contain'}}
                      source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                    />
                  <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item[1].name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                      <TouchableOpacity>
                        <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item[0].id}
              ListHeaderComponent = {this._renderHeader}
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
  },
});
