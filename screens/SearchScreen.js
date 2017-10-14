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
  Alert
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { Ionicons } from '@expo/vector-icons';
import { List, ListItem, SearchBar, Divider } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class SeacrhScreen extends React.Component {

  componentDidMount() {
    this.fetchTrends();
  }

  fetchTrends() {
    fetch('http://solosnap.herokuapp.com/api/trend')
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
  _renderTrendings() {
    if(this.state.doneFetching == false) {
      return (<Text>Loading</Text>)
    } else {
      return (
        <List>
          <FlatList
            horizontal={true}
            data = {this.state.users}
            renderItem = {({ item }) => (
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileTemplate', {name: item.name}) } style={{ marginTop: 20, width: 150, height: 150 }}>
                <Image
                  style={{height: 80, resizeMode: 'contain'}}
                  source={{uri: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2015/05/snapcode.png'}}
                />
              <Text style={{  textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>

              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </List>
      )
    }

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
        <SearchBar
          lightTheme
          clearIcon
          onChangeText={ (keyword) => this.setState({keyword}) }
          onSubmitEditing={ () => this.props.navigation.navigate('Results', {keyword: this.state.keyword}) }
          placeholder='أعثر علي شخص ما...' />

        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 17, fontWeight: 'bold', color: 'grey' }}>أشهر الأعضاء</Text>

              {this._renderTrendings()}

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
