import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  CameraRoll
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { Ionicons } from '@expo/vector-icons';
import { List, ListItem, } from 'react-native-elements';
import Toast, {DURATION} from 'react-native-easy-toast'

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://solosnap.herokuapp.com/api/users')
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
  saveBarCode() {
    CameraRoll.saveToCameraRoll('https://cae8b291f7a009bc3e401054-wceel7psqz6.netdna-ssl.com/wp-content/uploads/2016/12/Dua-Lipa.jpg');
    this.refs.toast.show('hello world!')
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

  _renderHeader = () => {
    return (
      <Carousel
        delay={3000}
        bullets={true}
        style={{ width, height: 200, }}
        autoplay
      >
        <View style={[{ alignItems: 'center', backgroundColor: 'darkblue' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #1</Text></View>
        <View style={[{ alignItems: 'center', backgroundColor: 'red' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #2</Text></View>
        <View style={[{ alignItems: 'center', backgroundColor: 'crimson' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #3</Text></View>
      </Carousel>
    )
  }

  _renderList = () => {
    if (this.state.doneFetching == false) {
      return (<Text>Loading...</Text>)
    } else {
      return (
        <List containerStyle={{flex: 1, flexDirection: 'row',}}>
          <Toast ref="hello world!"/>
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
                        <TouchableOpacity onPress={this.saveBarCode()}>
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
      {this._renderList()}
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
