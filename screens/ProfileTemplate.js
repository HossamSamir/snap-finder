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
import { Ionicons, FontAwesome } from '@expo/vector-icons';
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asfasf: 'asf',
      users: [
        {
          name: '# الكوميديين',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22323478_1961850964103392_124371469_n.png?oh=eb755bc8aaead836309a5fb9feda5d66&oe=59D8626D',
          id: 1
        },
        {
          name: '# التصميم',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22264542_1961850954103393_1968636233_n.png?oh=a8f31b7d46ebb40e58c5f1da7ce0f853&oe=59D94C4E',
          id: 2
        },
        {
          name: '# الألعاب',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22264495_1961850957436726_1551241238_n.png?oh=d732171a78373a570fe8b455bd8b13dd&oe=59D83776',
          id: 3
        },
        {
          name: '# متاجر',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22278651_1961850974103391_1223689281_n.png?oh=d2e96f7e69af1e3e19f9a7835dea0a0f&oe=59D845F8',
          id: 4
        },
        {
          name: '# التصوير',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22264540_1961850970770058_1961313681_n.png?oh=dc09248758b7bff07509c034cbcf00e9&oe=59D95949',
          id: 5
        },
        {
          name: '# عشاق المطاعم',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22278467_1961850960770059_1508159041_n.png?oh=7798b0ae4c8c3e5d305c4fa9939db968&oe=59D92CB6',
          id: 6
        },
    ],
    }
  }

  static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.name,
    });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', }}>

        <View style={{ flex: 1.5, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'transparent', margin: 5, marginRight: 20, }}>
            <Image
              style={{ flex: 1, height: 300, resizeMode: 'cover', borderRadius: 20,}}
              source={{uri: 'https://i.pinimg.com/originals/c5/8e/d5/c58ed56ab6f544816c2a60f142a6303a.jpg'}}/>
          </View>
          <View style={{ flex: .5, backgroundColor: 'transparent', padding: 5, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'crimson' }}>{this.props.navigation.state.params.name}</Text>
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

          <List containerStyle={{flex: .5, flexDirection: 'row', borderTopWidth: 0, marginTop: -40, backgroundColor: 'transparent',}}>
            <FlatList
              horizontal={true}
              data = {this.state.users}
              renderItem = {({ item }) => (
                <View style={{  marginHorizontal: 20, }}>
                  <Image
                    style={{height: 50, resizeMode: 'contain'}}
                    source={{uri: item.avatar_url}} />
                  <Text style={{  textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'crimson' }}>{item.name}</Text>
                </View>
              )}
              keyExtractor={item => item.id} />
          </List>
            <Text style={{ flex: .7, marginHorizontal: 20, lineHeight: 20,}}>
              test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio .. test bio ..
            </Text>
            <View style={{ flex: .3, flexDirection: 'row' }}>

              <TouchableOpacity>
              <FontAwesome name='facebook-square' size={30} color='crimson' style={{ backgroundColor: 'transparent', paddingHorizontal: 15 }} />
              </TouchableOpacity>

              <TouchableOpacity>
              <FontAwesome name='twitter-square' size={30} color='crimson' style={{ backgroundColor: 'transparent', paddingHorizontal: 15 }} />
              </TouchableOpacity>

              <TouchableOpacity>
              <FontAwesome name='google-plus-square' size={30} color='crimson' style={{ backgroundColor: 'transparent', paddingHorizontal: 15 }} />
              </TouchableOpacity>

              <TouchableOpacity>
              <FontAwesome name='instagram' size={30} color='crimson' style={{ backgroundColor: 'transparent', paddingHorizontal: 15 }} />
              </TouchableOpacity>

              <TouchableOpacity>
              <FontAwesome name='snapchat' size={30} color='crimson' style={{ backgroundColor: 'transparent', paddingHorizontal: 15 }} />
              </TouchableOpacity>

              <TouchableOpacity>
              <FontAwesome name='vine' size={30} color='crimson' style={{ backgroundColor: 'transparent', paddingHorizontal: 15 }} />
              </TouchableOpacity>

            </View>
      </View>
    )
  }
}
