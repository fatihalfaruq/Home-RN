import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class Carousel extends Component {
  render() {
    return (
      <View style={styles.concom2}>
        <View style={styles.Concom}>
          <Image
            style={styles.Carmg}
            source={require('../assets/image/skull.png')}
          />
        </View>
        <Text style={styles.Textcar}>Dead</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Carmg: {
    width: 80,
    height: 80,
  },
  Textcar: {
    fontSize: 20,
    color: 'red',
  },
  Concom: {
    backgroundColor: 'black',
    borderRadius: 80,
    borderColor: 'red',
    borderWidth: 2,
  },
  concom2: {alignItems: 'center', padding: 17},
});
