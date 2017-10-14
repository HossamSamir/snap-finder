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

export default class FavScreen extends React.Component {
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://solosnap.herokuapp.com/api/fav?user_id=2')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((user) => {
        this.state.users.push(user)
      })
    })
    .then(() => {
      this.setState({doneFetching: true})
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      doneFetching: false,
      users: [],
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
  _handleFav() {
    if (this.state.doneFetching == false) {
      return (<Text>Loading...</Text>)
    } else {
      return (
        <List containerStyle={{flex: 1, flexDirection: 'row', marginTop: 30, borderTopWidth: 0}}>
              <FlatList
                data = {this.state.users}
                renderItem = {({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row',  }}>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[0].name}) } style={{ flex: 1, margin: 10,  }}>
                      <Image
                        style={{ flex: 1, height: 150, resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item[0].name}</Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name='ios-heart' size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[1].name}) } style={{ flex: 1, margin: 10,  }}>
                      <Image
                        style={{ flex: 1, height: 150, resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item[1].name}</Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name='ios-heart' size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item[0].id}
              />
            </List>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width, marginBottom: -38, resizeMode: 'contain'}}
          source={require('../assets/images/header.jpg')}
        />
      {this._handleFav()}
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
