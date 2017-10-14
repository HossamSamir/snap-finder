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
  CameraRoll,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { List, ListItem, } from 'react-native-elements';

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
        if(user[0].special == true)
          this.state.specUsers.push(user)
        else
        this.state.users.push(user)
      })
    })
    .then(() => {
      this.setState({doneFetching: true})
    })
  }
  saveBarCode() {
    CameraRoll.saveToCameraRoll('https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png');
  }
  constructor(props) {
    super(props);
    this.state = {
      doneFetching: false,
      users: [],
      specUsers: [],
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
        <View style={[{ alignItems: 'center', backgroundColor: 'darkblue' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>تجربة #1</Text></View>
        <View style={[{ alignItems: 'center', backgroundColor: 'red' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>تجربة #2</Text></View>
        <View style={[{ alignItems: 'center', backgroundColor: 'crimson' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>تجربة #3</Text></View>
      </Carousel>
    )
  }
  _renderFooter = () => {
    if (this.state.doneFetching == false) {
      return (<Text>Loading...</Text>)
    } else {
      return (
        <List containerStyle={{flex: 1, flexDirection: 'row', backgroundColor: 'darkblue'}}>
              <FlatList
                data = {this.state.users}
                renderItem = {({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row',  }}>
                    <View style={{ flex: 1, margin: 10,  }}>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Foundation name='star' size={30} color='yellow' style={{ backgroundColor: 'transparent',}} />
                        <Foundation name='crown' size={50} color='yellow' style={{ backgroundColor: 'transparent', marginHorizontal: 10}} />
                        <Foundation name='star' size={30} color='yellow' style={{ backgroundColor: 'transparent',}} />
                      </View>
                      <Image
                        style={{ flex: 1, height: 150, marginHorizontal: 30,resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', color: 'crimson', fontSize: 18, fontWeight: 'bold' }}>{item[0].name}</Text>
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
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Foundation name='star' size={30} color='yellow' style={{ backgroundColor: 'transparent',}} />
                        <Foundation name='crown' size={50} color='yellow' style={{ backgroundColor: 'transparent', marginHorizontal: 10}} />
                        <Foundation name='star' size={30} color='yellow' style={{ backgroundColor: 'transparent',}} />
                      </View>
                      <Image
                        style={{ flex: 1, height: 150, marginHorizontal: 30,resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', color: 'crimson', fontSize: 18, fontWeight: 'bold' }}>{item[1].name}</Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.saveBarCode()}>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={item => item[0].id}
              />
            </List>

      )
    }
  }

  _renderList = () => {
    if (this.state.doneFetching == false) {
      return (<ActivityIndicator style={{ marginTop: 40 }} size='large' />)
    } else {
      return (
        <List containerStyle={{}}>
              <FlatList
                data = {this.state.specUsers}
                renderItem = {({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row',  }}>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[0].name}) } style={{ flex: 1, margin: 10,  }}>
                      <Image
                        style={{ flex: 1, height: 150, marginHorizontal: 30,resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', color: 'crimson', fontSize: 18, fontWeight: 'bold' }}>
                        <Foundation name='star' size={30} style={{ backgroundColor: 'transparent',}} />
                        {item[0].name}
                        <Foundation name='star' size={30} style={{ backgroundColor: 'transparent',}} />
                      </Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.saveBarCode()}>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[1].name}) } style={{ flex: 1, margin: 10,  }}>
                      <Image
                        style={{ flex: 1, height: 150, marginHorizontal: 30,resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center',  color: 'crimson', fontSize: 18, fontWeight: 'bold' }}>
                      <Foundation name='star' size={30} style={{ backgroundColor: 'transparent',}} />
                      {item[1].name}
                      <Foundation name='star' size={30} style={{ backgroundColor: 'transparent',}} />
                    </Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.saveBarCode()}>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item[0].id}
                ListHeaderComponent = {this._renderHeader}
              />
            </List>
      )
    }
  }



  _renderList2 = () => {
    if (this.state.doneFetching == false) {
      return (<Text> </Text>)
    } else {
      return (
        <List containerStyle={{ borderTopColor: 'transparent' }}>
              <FlatList
                data = {this.state.users}
                renderItem = {({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row',  }}>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[0].name}) } style={{ flex: 1, margin: 10,  }}>
                      <Image
                        style={{ flex: 1, height: 150, marginHorizontal: 30,resizeMode: 'contain'}}
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
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[1].name}) } style={{ flex: 1, margin: 10,  }}>
                      <Image
                        style={{ flex: 1, height: 150, marginHorizontal: 30,resizeMode: 'contain'}}
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
      <ScrollView>
        {this._renderList()}
        {this._renderList2()}
      </ScrollView>
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
