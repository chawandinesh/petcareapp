import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');
function PetHomeScreen(props) {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content"/>
      <ImageBackground
        source={require('../assets/images/pet4.jpg')}
        resizeMode="cover"
        style={{flex: 3}}></ImageBackground>
      <View
        style={{
          flex: 2,
          backgroundColor: '#ffffee',
          marginTop: -200,
          borderTopRightRadius: 200,
          borderTopColor: '#000',
          borderTopWidth: 5,
          borderRightWidth: 2,
          borderTopLeftRadius: 0,
        }}>
        <View
          style={{
            padding: 5,
            width: width * 0.6,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: height * 0.05,
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 10,
              fontWeight: 'bold',
              width: width * 0.5,
              textAlign: 'center',
            }}>
            Pet Care
          </Text>
        </View>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 2,
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('PetCategoriesScreen') }
            style={{
              backgroundColor: '#96753c',
              borderRadius: 15,
              height: width * 0.3,
              borderBottomWidth: 5,
              borderRightWidth: 2,
              borderLeftWidth: 2,
              width: width * 0.4,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                color:'#fff',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Pet Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress ={() => props.navigation.navigate('PetAllDetails')}
            style={{
              backgroundColor: '#96753c',
              borderBottomWidth: 5,
              borderRightWidth: 2,
              borderLeftWidth: 2,
              borderRadius: 15,
              height: width * 0.3,
              width: width * 0.4,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                color:'#fff',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              All Details
            </Text>
          </TouchableOpacity>
        </View>
       
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: 5,
            backgroundColor: '#47963c',
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
          }}>
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={() => props.navigation.navigate('PetAboutUs')}>
            <Icon name="infocirlceo" type="antdesign" color="#fff"/>
            <Text style={{fontSize: 20,padding:4, color: '#fff', fontWeight: 'bold'}}>
              About Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export {PetHomeScreen};
