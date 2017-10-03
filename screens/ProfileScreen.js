import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  FlatList
} from 'react-native';
import { List, ListItem, SearchBar, Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
    }
  }

  static navigationOptions = {
    title: 'Profile'
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', }}>

        <View style={{ flex: 1, maxHeight: 250, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'transparent', margin: 5, marginRight: 20, }}>
            <Image
              style={{ flex: 1, height: 250, resizeMode: 'cover', borderRadius: 20,}}
              source={{uri: 'https://i.pinimg.com/originals/c5/8e/d5/c58ed56ab6f544816c2a60f142a6303a.jpg'}}/>
          </View>
          <View style={{ flex: .7, backgroundColor: 'transparent', padding: 5, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'crimson' }}>Dua Lipa</Text>
            <Text style={{ fontSize: 15 }}>19 years old</Text>
            <Text style={{ fontSize: 15 }}>CA, USA</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center',  marginTop: 20}}>
                <TouchableOpacity>
                  <Ionicons name={10 > 5 ? 'ios-heart-outline' : 'ios-heart'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons name={10 > 5 ? 'ios-cloud-download-outline' : 'ios-cloud-download'} size={38} color='crimson' style={{ backgroundColor: 'transparent', padding: 10 }} />
                </TouchableOpacity>
              </View>
          </View>
        </View>

          <List containerStyle={{flex: 1, flexDirection: 'row', borderTopWidth: 0, marginTop: -60, backgroundColor: 'transparent'}}>
            <FlatList
              horizontal={true}
              data = {this.state.users}
              renderItem = {({ item }) => (
                <View style={{  margin: 20, }}>
                  <Image
                    style={{height: 100, resizeMode: 'contain'}}
                    source={{uri: item.avatar_url}} />
                  <Text style={{  textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'crimson' }}>{item.name}</Text>
                </View>
              )}
              keyExtractor={item => item.id} />
          </List>

      </View>
    )
  }
}
