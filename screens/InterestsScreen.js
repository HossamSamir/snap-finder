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
  ActivityIndicator
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { Ionicons } from '@expo/vector-icons';
import { List, ListItem } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class InterestsScreen extends React.Component {
  componentDidMount() {
    this.fetchIntersts();
  }

  fetchIntersts() {
    fetch('http://solosnap.herokuapp.com/api/interestsscreen')
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
      users: [],
      doneFetching: false,
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
  _renderIntersts = () => {
    if (this.state.doneFetching == false) {
      return (<ActivityIndicator style={{ marginTop: 40 }} size='large' />)
    } else {
      return (
        <List containerStyle={{flex: 1, flexDirection: 'row', borderTopWidth: 0}}>
              <FlatList
                data = {this.state.users}
                renderItem = {({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#F6F7F8'}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('Interest', {cat: item[0]})
                      }}
                      style={{ flex: 1, }}>
                      <Image
                        style={{ flex: 1, height: 120, resizeMode: 'contain'}}
                        source={{uri: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22155479_537675249907710_173038723_n.png?oh=74c53b66a2b809afca1fe4d2015f9ba6&oe=59D1954C'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 19, padding: 20, fontWeight: 'bold', color: 'crimson' }}>{item[0].name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('Interest', {cat: item[1]})
                      }}

                      style={{ flex: 1, margin: 10,  }}>
                      <Image
                        style={{ flex: 1, height: 120, resizeMode: 'contain'}}
                        source={{uri: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22155479_537675249907710_173038723_n.png?oh=74c53b66a2b809afca1fe4d2015f9ba6&oe=59D1954C'}}
                      />
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 19, padding: 20, fontWeight: 'bold', color: 'crimson' }}>{item[1].name}</Text>
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
      {this._renderIntersts()}
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
