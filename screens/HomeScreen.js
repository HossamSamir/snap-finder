import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import { MonoText } from '../components/StyledText';

const datacarousel = [
  {
      "id": 339964,
      "title": "Valerian and the City of a Thousand Planets",
      "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
  },
  {
      "id": 315635,
      "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
  },
  {
      "id": 339403,
      "title": "Baby Driver",
      "subtitle": "More than just a trend",
      "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {key: 'user #1'},
        {key: 'user #2'},
        {key: 'user #3'},
        {key: 'user #4'},
        {key: 'user #5'},
        {key: 'user #6'},
        {key: 'user #7'},
        {key: 'user #8'},
      ]
    }
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <SwipeableParallaxCarousel
          titleColor='white'
          navigation={true}
          navigationColor='white'
          data={datacarousel}/>
          <FlatList
          data={this.state.users}
          renderItem={
            ({item}) =>
            <View style={{ width: '100%', backgroundColor: 'crimson', margin: 20 }}>
              <Text style={{ color: 'white', fontSize: 25, padding: 20 }}>{item.key}</Text>
            </View>}/>
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
