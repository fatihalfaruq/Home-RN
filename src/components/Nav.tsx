import {
  Text,
  StyleSheet,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    return (
      <View>
        <View style={styles.connav}>
          <TouchableOpacity>
            <Image
              style={styles.gear}
              source={require('../assets/icon/gear.png')}
            />
          </TouchableOpacity>
          <Text style={styles.tnav}>
            fatihalfaruq
            <Image
              style={styles.cen}
              source={require('../assets/icon/correct.png')}
            />
          </Text>
          <TouchableOpacity>
            <Image
              style={styles.gear2}
              source={require('../assets/icon/follower.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.gar}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gear: {width: 30, height: 30, marginTop: 10},
  cen: {width: 17, height: 17},

  gear2: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  connav: {flexDirection: 'row', justifyContent: 'space-around'},
  tnav: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
  },
  gar: {height: 1, width: '100%', backgroundColor: '#B0BEC5', marginTop: 10},
});
