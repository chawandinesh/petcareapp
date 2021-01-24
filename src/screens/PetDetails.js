import React from 'react';
import {View, Text, ImageBackground, Dimensions, Image, NativeModules} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PetContext} from './context';
import {useIsFocused} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

function PetDetails(props) {
  const {state, setState} = React.useContext(PetContext);
  const {category} = props.route.params;
  const data = state[category];
  const isFocused = useIsFocused();
  const {StatusBarManager} = NativeModules
  const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;
  
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props, isFocused]);

  const handleDelete = (name) => {
    setState({
      ...state,
      [category]: state[category].filter((e, idx) => e.name !== name),
    });
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/pet2.jpg')}
      blurRadius={4}
      imageStyle={{opacity: 1, backgroundColor: '#000'}}>
      <View
        style={{height: height * 0.2,paddingTop:STATUSBAR_HEIGHT, backgroundColor: 'black', opacity: 0.8}}>
        <TouchableOpacity
          style={{alignItems: 'flex-start', margin: 5}}
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
              Pet Details
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('PetAddDetails', {category: category})
              }>
              <Icon
                type="entypo"
                raised
                iconStyle={{fontSize: 40}}
                name="plus"
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={{height: height * 0.9}}>
        {data.length ? (
          data.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  props.navigation.navigate('PetUpdateDetails', {
                    categoryProp: category,
                    nameProp: e.name,
                    index: index,
                  })
                }>
                <View style={{width: width, flexDirection: 'row'}}>
                  <View
                    style={{
                      height: height * 0.15,
                      width: width * 0.8,
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
                          backgroundColor: '#a5d1a7',
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
                  <View
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
                    <TouchableOpacity onPress={(k) => handleDelete(e.name)}>
                      <Icon type="antdesign" name="delete" color="red" />
                    </TouchableOpacity>
                  </View>
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
export {PetDetails};
