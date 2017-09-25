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
          name: '# sport',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 1
        },
        {
          name: '# art',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 2
        },
      ],
      [
        {
          name: '# sport',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 3
        },
        {
          name: '# art',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 4
        },
      ],
      [
        {
          name: '# sport',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 5
        },
        {
          name: '# art',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 6
        },
      ],
      [
        {
          name: '# sport',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 1
        },
        {
          name: '# art',
          avatar_url: 'https://scontent-cai1-1.xx.fbcdn.net/v/t34.0-12/22014707_535977623410806_1650694489_n.png?oh=bb585edb7ff77f85bb0b2997e7c2fa81&oe=59CB0253',
          id: 2
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
                  <TouchableOpacity style={{ flex: 1, }}>
                    <Image
                      style={{ flex: 1, height: 120, resizeMode: 'contain'}}
                      source={{uri: item[0].avatar_url}}
                    />
                  <Text style={{ flex: 1, textAlign: 'center', fontSize: 19, padding: 20, fontWeight: 'bold', color: 'crimson' }}>{item[0].name}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, margin: 10,  }}>
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
