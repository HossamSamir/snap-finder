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

export default class InterestsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
      [
        {
          name: '# الكوميديين',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22184682_537675149907720_1952900281_n.png?oh=12dcfb1ccef223fc6b061ea851534b48&oe=59D1DDD5',
          id: 1
        },
        {
          name: '# التصميم',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22157087_537675166574385_1421966983_n.png?oh=13716367285724c0b5ac3c6aebc19153&oe=59D20422',
          id: 2
        },
      ],
      [
        {
          name: '# الألعاب',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 3
        },
        {
          name: '# متاجر',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22093663_537675286574373_2081643475_n.png?oh=9586ae8fb4acde2315b346a82e789d1d&oe=59D1F566',
          id: 4
        },
      ],
      [
        {
          name: '# التصوير',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22156963_537675276574374_2048259937_n.png?oh=0b42601eebfc31b205e74271d8db1f5c&oe=59D193B9',
          id: 5
        },
        {
          name: '# عشاق المطاعم',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22155479_537675249907710_173038723_n.png?oh=74c53b66a2b809afca1fe4d2015f9ba6&oe=59D1954C',
          id: 6
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
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width, marginBottom: -38, resizeMode: 'contain'}}
          source={require('../assets/images/header.jpg')}
        />



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
                      source={{uri: item[0].avatar_url}}
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
                      source={{uri: item[1].avatar_url}}
                    />
                  <Text style={{ flex: 1, textAlign: 'center', fontSize: 19, padding: 20, fontWeight: 'bold', color: 'crimson' }}>{item[1].name}</Text>
                  </TouchableOpacity>
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
