/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
export default ProfileScreen;

import React, {useNavigation, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {HeartIcon} from 'react-native-heroicons/solid';
import {styles} from './ProfileScreenStyles';
const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImagePick = async () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    try {
      const response = await ImagePicker.showImagePicker(options);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        setProfileImage(response.uri); // Use response.uri for image path
      }
    } catch (error) {
      console.warn(error);
    }
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#131313'}}>
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.username}>Username:</Text>
            <Text style={styles.name}>Prakash Poriya</Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 30,
              overflow: 'hidden',
              borderWidth: 0.6,
              borderColor: '#9F9428',
            }}
            onPress={handleImagePick}>
            {profileImage ? (
              <Image
                source={{uri: profileImage}}
                style={{height: 60, width: 60}}
              />
            ) : (
              <Image
                source={require('../assets/images/john.jpg')}
                style={{height: 60, width: 60}}
              />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.list}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.list}>Favourites</Text>
            <HeartIcon size="34" color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.list}>Help & Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.list}>Log Out</Text>
            {/* <FiLogOut size="34" color={"black"} /> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
};
