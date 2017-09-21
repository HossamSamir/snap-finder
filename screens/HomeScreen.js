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
  Dimensions
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
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
      <View style={styles.container} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={3000}
          bullets={true}
          style={{ width, height: 200 }}
          autoplay
        >
          <View style={[{ alignItems: 'center', backgroundColor: 'darkblue' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #1</Text></View>
          <View style={[{ alignItems: 'center', backgroundColor: 'red' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #2</Text></View>
          <View style={[{ alignItems: 'center', backgroundColor: 'crimson' }, this.state.size]}><Text style={{  color: 'white', fontSize: 40, marginTop: 50}}>slide #3</Text></View>
        </Carousel>
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
