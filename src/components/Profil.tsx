import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';

export default class Profil extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Carousel2 />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
