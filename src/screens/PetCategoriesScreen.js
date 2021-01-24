import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {PetContext} from './context';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

function PetCategoriesScreen(props) {
  const data = ["Pets", "Livestock", "Beasts","Jhonny"]
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/pet5.jpg')}
        resizeMode="cover"
        style={{flex: 3}}>
        <View style={{flex: 1, alignItems: 'flex-start', margin: 10}}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon
              type="antdesign"
              name="arrowleft"
              color="#fff"
              size={height * 0.05}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View
        style={{
          flex: 2,
          backgroundColor: '#ffffee',
          marginTop: -50,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          borderTopColor: '#000',
          borderLeftWidth: 2,
          borderTopWidth: 5,
          borderRightWidth: 2,
        }}>
        <LinearGradient
          colors={['#fff', '#a5d1a7', '#285']}
          style={{flex: 2, borderTopRightRadius: 50, borderTopLeftRadius: 50}}>
          <View
            style={{
              padding: 5,
              width: width * 0.6,
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: height * 0.04,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
                fontWeight: 'bold',
                width: width * 0.5,
                textAlign: 'center',
              }}>
              Categories
            </Text>
          </View>
          <View
            style={{
              flex: 4,
              alignItems: 'center',
              justifyContent: 'center',
              height: height * 0.3,
            }}>
            <ScrollView horizontal>
              {data.map((e, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.9}
                    onPress={() =>
                      props.navigation.navigate('PetDetails', {category: e})
                    }>
                    <View
                      key={index}
                      style={{
                        width: width * 0.4,
                        borderTopStartRadius: 20,
                        borderBottomEndRadius: 30,
                        elevation: 10,
                        height: width * 0.4,
                        backgroundColor: '#fff',
                        margin: 5,
                        borderTopWidth: 8,
                        borderRightWidth: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 26,
                          color: '#286',
                        }}>
                        {e}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
export {PetCategoriesScreen};
