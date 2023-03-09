import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <View>
        <View style={styles.gar}></View>
        <View style={styles.con}>
          <View style={styles.ctx}>
            <Text style={styles.tx1}>2M</Text>
            <Text style={styles.txa}>kiriman</Text>
          </View>
          <View style={styles.ctx}>
            <Text style={styles.tx2}>500M</Text>
            <Text style={styles.txb}>pengikut</Text>
          </View>
          <View style={styles.ctx}>
            <Text style={styles.tx3}>273</Text>
            <Text style={styles.txc}>diikuti</Text>
          </View>
        </View>
        <View style={styles.gar2}></View>
        <View style={styles.ci}>
          <Image
            style={styles.cen}
            source={require('../assets/icon/feed.png')}
          />
          <Image
            style={styles.cen1}
            source={require('../assets/icon/smartphone.png')}
          />
          <Image
            style={styles.cen2}
            source={require('../assets/icon/fish-food.png')}
          />
          <Image
            style={styles.cen3}
            source={require('../assets/icon/save-instagram.png')}
          />
          <Image
            style={styles.cen4}
            source={require('../assets/icon/love.png')}
          />
        </View>
        <View style={styles.gar2}></View>
        <View style={styles.gar3}></View>
        <View style={styles.ct}>
          <Text style={styles.tx}>Gunakan aplikasi ini</Text>
        </View>
        <View style={styles.gar3}></View>
        <View style={styles.ci}>
          <Image
            style={styles.cen}
            source={require('../assets/icon/home.png')}
          />
          <Image
            style={styles.cen1}
            source={require('../assets/icon/search.png')}
          />
          <Image
            style={styles.cen2}
            source={require('../assets/icon/more.png')}
          />
          <Image
            style={styles.cen3}
            source={require('../assets/icon/heart.png')}
          />
          <Image
            style={styles.cen4}
            source={require('../assets/icon/user.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gar: {height: 1, width: '100%', backgroundColor: '#B0BEC5'},
  gar2: {height: 1, width: '100%', backgroundColor: '#B0BEC5', marginTop: 10},
  tx1: {fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 50},
  txa: {fontSize: 20, color: 'black', marginLeft: 50},
  tx2: {fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 65},
  txb: {fontSize: 20, color: 'black', marginLeft: 65},
  tx3: {fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 65},
  txc: {fontSize: 20, color: 'black', marginLeft: 65},
  ctx: {alignItems: 'center'},
  con: {flexDirection: 'row', marginTop: 10},
  cen: {width: 35, height: 35, marginLeft: 20},
  cen1: {width: 35, height: 35, marginLeft: 55},
  cen2: {width: 35, height: 35, marginLeft: 55},
  cen3: {width: 35, height: 35, marginLeft: 55},
  cen4: {width: 35, height: 35, marginLeft: 50},
  ci: {flexDirection: 'row', marginTop: 15},
  gar3: {height: 1, width: '100%', backgroundColor: '#B0BEC5', marginTop: 20},
  ct: {alignItems: 'center'},
  tx: {fontSize: 20, fontWeight: 'bold', color: 'blue', marginTop: 15},
});
