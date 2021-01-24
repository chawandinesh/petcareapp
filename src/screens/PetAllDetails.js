import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  NativeModules,
  ImageBackground,
} from 'react-native';
import {PetContext} from './context';
import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');

function PetAllDetails(props) {
  const {state, setState} = React.useContext(PetContext);
  const allKeys = Object.keys(state);
  const data = allKeys
    .map((e) => (state[e].length ? state[e] : null))
    .filter((e) => e !== null);

  const {StatusBarManager} = NativeModules;
  const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;
  return (
    <ImageBackground
      resizeMode="cover"
      style={{flex: 1}}
      blurRadius = {1}
      imageStyle={{backgroundColor: '#000', opacity: 0.8}}
      source={require('../assets/images/pet3.jpg')}>
      <View
        style={{height: height * 0.2,paddingTop:STATUSBAR_HEIGHT, backgroundColor: 'black', opacity: 0.8}}>
        <TouchableOpacity
          style={{alignItems: 'flex-start', padding: 5}}
          onPress={() => props.navigation.goBack()}>
          <Icon
            type="antdesign"
            name="arrowleft"
            color="#fff"
            size={height * 0.04}
          />
        </TouchableOpacity>
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: height * 0.04,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              All Details
            </Text>
          </View>
          <View></View>
        </View>
      </View>
      <ScrollView style={{height: height * 0.9}}>
        {data.flat(1).length ? (
          data.flat(1).map((e, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={{width: width, flexDirection: 'row'}}>
                  <View
                    style={{
                      height: height * 0.15,
                      width: width * 0.9,
                      borderTopWidth: 5,
                      borderTopLeftRadius: 30,
                      borderLeftWidth: 2,
                      flexDirection: 'row',
                      margin: 10,
                    }}>
                    <View style={{width: '60%', borderTopLeftRadius: 30}}>
                      <View
                        style={{
                          height: '60%',
                          borderTopLeftRadius: 30,
                          backgroundColor: '#fff',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 28,
                            textAlign: 'center',
                            color: '#6e2d8a',
                            fontWeight: 'bold',
                          }}>
                          {e.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          height: '40%',
                          backgroundColor: '#c99759',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                          {e.careService}
                        </Text>
                      </View>
                    </View>
                    <View style={{width: '40%'}}>
                      {e.image.length ? (
                        <Image
                          source={{uri: e.image}}
                          resizeMode="stretch"
                          style={{width: 'auto', height: height * 0.14}}
                        />
                      ) : (
                        <View
                          style={{
                            width: 'auto',
                            height: height * 0.14,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'black',
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 23,
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}>
                            No Image
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                  {/* <View
                    style={{
                      width: width * 0.1,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      borderRightWidth: 8,
                      justifyContent: 'center',
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      margin: 10,
                    }}>
                    <TouchableOpacity>
                      <Icon type="antdesign" name="delete" color="red" />
                    </TouchableOpacity>
                  </View> */}
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: height * 0.6,
            }}>
            <View
              style={{
                width: width * 0.8,
                height: height * 0.3,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.8)',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  textAlign: 'center',
                  padding: 19,
                }}>
                No data Found, Click on ' + ' to add Pet Details
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}
export {PetAllDetails};
