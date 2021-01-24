import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
function PetAboutUs(props) {
  return (
    <ImageBackground
      imageStyle={{backgroundColor: '#000', opacity: 0.6}}
      source={require('../assets/images/pet6.jpg')}
      style={{flex: 1}}>
      <View
        style={{
          height: height * 0.1,
          backgroundColor: 'black',
          opacity: 0.8,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{alignItems: 'flex-start', padding: 10}}
          onPress={() => props.navigation.goBack()}>
          <Icon
            type="antdesign"
            name="arrowleft"
            color="#fff"
            size={height * 0.05}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: height * 0.04,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            About Us
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          opacity: 0.7,
          width: width * 0.9,
          justifyContent:'center',
          marginTop: height * 0.1,
          height: height * 0.7,
          alignSelf: 'center',
        }}>
            <Text style={{fontSize: 24,textAlign:'center', fontWeight:'bold'}}>This is simple, amazing and ads free app</Text>

            <Text style={{fontSize: 24,textAlign:'center', fontWeight:'bold', marginTop: 10}}> In this app , you can know about all pets, this app contains data about all pets requirements, such as Food, Exercise and Routine.
         </Text>
         <Text style={{fontSize: 24,textAlign:'center', fontWeight:'bold', marginTop: 10}}> Also in this app, you can managethe routine of your pets
         </Text>
         <Text style={{fontSize: 24,textAlign:'center', fontWeight:'bold', marginTop: 10}}> Enjoy the App
         </Text>

        </View>
    </ImageBackground>
  );
}
export {PetAboutUs};
