import React from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  NativeModules,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import ImagePicker, { cleanSingle } from 'react-native-image-crop-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {PetContext} from './context';
import moment from 'moment';

const {height, width} = Dimensions.get('window');

const PetViewDetails = (props) => {
  const {categoryProp, nameProp,index,data} = props.route.params
  console.log(data, 'data...')
  const {state, setState} = React.useContext(PetContext);
  const {StatusBarManager} = NativeModules;
  const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;
  const [petDetails, setPetDetails] = React.useState({
    name: '',
    careService: '',
    serviceRequirements: '',
    categoryOfAnimal: '',
    notes: '',
    image: '',
  });
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = React.useState(
    false,
  );
  const handleDatePicked = (date) => {
    setPetDetails({
      ...petDetails,
      careService: moment(date).format('DD-MM-YYYY'),
    });
    Keyboard.dismiss();
    setIsDateTimePickerVisible(false)
  };
  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };
  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };
  React.useEffect(() => {
    if(data){
        setPetDetails(data)
    }
  },[])
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setPetDetails({...petDetails, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = () => {
    [...state[categoryProp].splice(index,1,petDetails)]
    setState(state)
    props.navigation.goBack()
  };
  return (
    <ImageBackground
      blurRadius={1}
      source={require('../assets/images/pet6.jpg')}
      style={{backgroundColor: '#000', flex: 1, alignItems: 'center'}}>
      <View
        style={{
          marginTop: 50,
          alignItems: 'flex-start',
          width: width,
          padding: 10,
          justifyContent: 'center',
          height: height * 0.06,
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            type="antdesign"
            name="arrowleft"
            color="#fff"
            size={height * 0.04}
          />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                height: height * 0.05,
                backgroundColor: '#fff',
                padding: 5,
                borderRadius: 20,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
                {' '}
                View Details
              </Text>
            </View>
            <View
              style={{
                width: width * 0.98,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                flex: 1,
                height: height * 0.8,
              }}>
              <View
                style={{
                  height: height * 0.12,
                  width: width * 0.8,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity activeOpacity={1} >
                  
                  <View
                    style={{
                      height: height * 0.1,
                      width: height * 0.1,
                      justifyContent: 'center',
                      marginTop: 10,
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderColor:'#fff',
                      borderWidth: 1,
                    }}>
                    {petDetails.image.length ? (
                      <Image
                        resizeMode="stretch"
                        source={{uri: petDetails.image}}
                        style={{
                          height: 0.1 * height,
                          flex: 1,
                          width: 0.1 * height,
                        }}
                      />
                    ) : (
                      <Icon name="adduser" color="#fff" type="antdesign" />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.inner}>
                <View
                  style={{
                    backgroundColor: '#5e521f',
                    padding: 5,
                    marginBottom: 10,
                    justifyContent: 'flex-end',
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    Name of the Animal
                  </Text>
                  <TextInput
                    placeholder="name..."
                    editable={false}
                    style={styles.textInput}
                    value={petDetails.name}
                    onChangeText={(text) =>
                      setPetDetails({...petDetails, name: text})
                    }
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#5e521f',
                    padding: 5,
                    marginBottom: 10,
                    justifyContent: 'flex-end',
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    Care Service
                  </Text>

                  <TextInput
                    placeholder="care service..."
                    value={petDetails.careService}
                    style={styles.textInput}
                    editable={false}
                    onChangeText={(text) =>
                      setPetDetails({...petDetails, careService: text})
                    }
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#5e521f',
                    marginBottom: 10,
                    padding: 5,
                    justifyContent: 'flex-end',
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    Service Requirements
                  </Text>
                  <TextInput
                    placeholder="service requirements..."
                    editable={false}
                    style={styles.textInput}
                    value={petDetails.serviceRequirements}
                    onChangeText={(text) =>
                      setPetDetails({...petDetails, serviceRequirements: text})
                    }
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#5e521f',
                    marginBottom: 10,
                    padding: 5,
                    justifyContent: 'flex-end',
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    Category of animal
                  </Text>
                  <TextInput
                    placeholder="Category of animal..."
                    editable={false}
                    style={styles.textInput}
                    value={petDetails.categoryOfAnimal}
                    onChangeText={(text) =>
                      setPetDetails({...petDetails, categoryOfAnimal: text})
                    }
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#5e521f',
                    padding: 5,
                    marginBottom: 10,
                    justifyContent: 'flex-end',
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    Notes:
                  </Text>
                  <TextInput
                    placeholder="Notes..."
                    editable={false}
                    multiline
                    numberOfLines={5}
                    value={petDetails.notes}
                    onChangeText={(text) =>
                      setPetDetails({...petDetails, notes: text})
                    }
                    style={{height: height * 0.13, backgroundColor: '#fff'}}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={handleDatePicked}
          onCancel={hideDateTimePicker}
        />
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 14,
   // flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    borderRadius: 3,
    height: height * 0.05,
    backgroundColor: '#fff',
  },
});

export {PetViewDetails};