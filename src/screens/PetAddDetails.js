import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {PetContext} from './context';
import moment from 'moment';

const {height, width} = Dimensions.get('window');

const PetAddDetails = (props) => {
  const {category} = props.route.params;
  const {state, setState} = React.useContext(PetContext);
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
  };
  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };
  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };
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
    setState({...state, [category]: [...state[category], petDetails]})
    props.navigation.goBack()
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ImageBackground
        source={require('../assets/images/pet6.jpg')}
        style={{backgroundColor: '#000', flex: 1, alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
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
                  size={height * 0.05}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                height: height * 0.05,
                backgroundColor: '#fff',
                padding: 5,
                borderRadius: 20,
                marginBottom: 5,
                alignItems: 'center',
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
                {' '}
                Add Details
              </Text>
            </View>
            <View
              style={{
                width: width * 0.98,
                backgroundColor: 'rgba(255,255,255,0.5)',
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
                <TouchableOpacity onPress={pickImage}>
                  <Text style={{color: '#000', fontWeight: 'bold'}}>
                    Tap For Image
                  </Text>
                  <View
                    style={{
                      height: height * 0.09,
                      width: height * 0.09,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderWidth: 1,
                    }}>
                    {petDetails.image.length ? (
                      <Image
                        resizeMode="stretch"
                        source={{uri: petDetails.image}}
                        style={{
                          height: 0.09 * height,
                          flex: 1,
                          width: 0.09 * height,
                        }}
                      />
                    ) : (
                      <Icon name="adduser" type="antdesign" />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.inner}>
                <View
                  style={{
                    backgroundColor: '#5e521f',
                    padding: 5,
                    marginBottom: 5,
                    justifyContent: 'flex-end',
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    Name of the Animal
                  </Text>
                  <TextInput
                    placeholder="Enter name..."
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
                    marginBottom: 5,
                    justifyContent: 'flex-end',
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    Care Service
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                      placeholder="care service..."
                      value={petDetails.careService}
                      editable={false}
                      style={[{...styles.textInput, width: '90%'}]}
                    />
                    <View style={{width: '10%'}}>
                      <Icon name="date" color="#fff" type="fontisto" onPress={showDateTimePicker} />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#5e521f',
                    marginBottom: 5,
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
                    marginBottom: 5,
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
                    marginBottom: 5,
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
                    multiline
                    numberOfLines={5}
                    value={petDetails.notes}
                    onChangeText={(text) =>
                      setPetDetails({...petDetails, notes: text})
                    }
                    style={{height: height * 0.13, backgroundColor: '#fff'}}
                  />
                </View>
              </ScrollView>
              <View
                style={{
                  width: width * 0.5,
                  alignSelf: 'center',
                  borderRadius: 23,
                  padding: 10,
                  backgroundColor: '#305e1f',
                }}>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <DateTimePicker
        isVisible={isDateTimePickerVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 14,
    flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    borderRadius: 3,
    backgroundColor: '#fff',
  },
});

export {PetAddDetails};
