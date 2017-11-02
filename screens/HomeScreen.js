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
import { Ionicons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
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
  saveBarCode = () => {
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

    _TrimName = (name) => {
        return (name.length > 16) ? (name.substring(0, 13) + "...") : name;
    }

  _renderHeader = () => {
    return (
    <View>
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
      <Text style={styles.usersTitle}>الاشباح المُميزين</Text>
      </View>
    )
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
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[0].name}) } style={{ flex: 1, margin: 7,  }}>
                    <MaterialCommunityIcons name='crown' size={40} style={{ color: '#E6C302', alignSelf: 'center', marginBottom: -5, backgroundColor: 'transparent',}} />
                      <Image
                        style={{ flex: 1, height: 139, resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />

                      <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
                        {this._TrimName(item[0].name)}
                      </Text>
                      <Text style={{ flex: 1, textAlign: 'center', color: '#444444', fontSize: 14, fontWeight: 'normal' }}>
                        {"@username" /* this will be fetched from database later */}
                      </Text>

                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                            <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} style={styles.actionIconFollow} />
                        </TouchableOpacity>
                        <Text style={styles.followersCount}>
                            87.3k
                        </Text>
                        <TouchableOpacity onPress={this.saveBarCode}>
                            <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} style={styles.actionIconDownload} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[1].name}) } style={{ flex: 1, margin: 7,  }}>
                    <MaterialCommunityIcons name='crown' size={40} style={{ color: '#E6C302', alignSelf: 'center', marginBottom: -5, backgroundColor: 'transparent',}} />
                      <Image
                        style={{ flex: 1, height: 139, resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
                      {this._TrimName(item[1].name)}
                    </Text>
                    <Text style={{ flex: 1, textAlign: 'center', color: '#444444', fontSize: 14, fontWeight: 'normal' }}>
                      {"@username" /* this will be fetched from database later */}
                    </Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} style={styles.actionIconFollow} />
                        </TouchableOpacity>
                        <Text style={styles.followersCount}>
                            87.3k
                        </Text>
                        <TouchableOpacity onPress={this.saveBarCode}>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} style={styles.actionIconDownload} />
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
        <Text style={styles.usersTitle}>الاشباح</Text>
              <FlatList
                data = {this.state.users}
                renderItem = {({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row',  }}>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[0].name}) } style={{ flex: 1, margin: 7,  }}>
                      <Image
                        style={{ flex: 1, height: 139, marginHorizontal: 10,resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{this._TrimName(item[0].name)}</Text>
                    <Text style={{ flex: 1, textAlign: 'center', color: '#444444', fontSize: 14, fontWeight: 'normal' }}>
                      {"@username" /* this will be fetched from database later */}
                    </Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} style={styles.actionIconFollow} />
                        </TouchableOpacity>
                        <Text style={styles.followersCount}>
                            87.3k
                        </Text>
                        <TouchableOpacity onPress={this.saveBarCode}>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} style={styles.actionIconDownload} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item[1].name}) } style={{ flex: 1, margin: 7,  }}>
                      <Image
                        style={{ flex: 1, height: 139, marginHorizontal: 10,resizeMode: 'contain'}}
                        source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{this._TrimName(item[1].name)}</Text>
                    <Text style={{ flex: 1, textAlign: 'center', color: '#444444', fontSize: 14, fontWeight: 'normal' }}>
                      {"@username" /* this will be fetched from database later */}
                    </Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity>
                          <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} style={styles.actionIconFollow} />
                        </TouchableOpacity>
                        <Text style={styles.followersCount}>
                            87.3k
                        </Text>
                        <TouchableOpacity>
                        <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} style={styles.actionIconDownload} />
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
        borderTopColor: 'transparent'
    },
    usersTitle: {
        backgroundColor: '#EEEEEE',
        textAlign: 'center',
        color: '#333333',
        padding: 4,
        fontSize: 21,
        fontWeight: 'bold',
        borderRadius: 10,
        marginTop: 4,
        marginBottom: 2,
        marginRight: 16,
        marginLeft: 16
    },
    actionIconDownload: {
        fontSize: 33,
        backgroundColor: 'transparent',
        padding: 10,
        color: '#60C3F7'
    },
    actionIconFollow: {
        fontSize: 33,
        backgroundColor: 'transparent',
        padding: 10,
        color: '#F54949'
    },
    followersCount: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});
