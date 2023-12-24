
import React, {useNavigation, useState} from 'react';
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
import * as ImagePicker from 'react-native-image-picker';

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
        setProfileImage(response.uri); // Set the image URI
      }
    } catch (error) {
      console.warn(error);
    }
  };
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
          onPress={handleImagePick} // Trigger image picker on press
        >
          {profileImage ? (
            <Image
              source={{uri: profileImage}}
              style={{height: 60, width: 60}}
            />
          ) : (
            <Image
              source={require('../assets/john.jpg')}
              style={{height: 60, width: 60}}
            />
          )}

import React, {useNavigation,useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Button,TouchableOpacity} from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';

const ProfileScreen = () => {
  return (
    <ScrollView       
      style={{ flex: 1, backgroundColor: '#131313' }}
    >
      <View style={styles.container}>
        <View style={{flexDirection:'column'}}>
          <Text style={styles.username}>Username:</Text>
          <Text style={styles.name}>Prakash Poriya</Text>
        </View>
        <TouchableOpacity style={{borderRadius:30,overflow:'hidden',borderWidth:0.6,borderColor:'#9F9428'}}>
          <Image source={require("../assets/images/john.jpg")} style={{height:60,width:60}} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.list}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.list}>Favourites</Text>
          <HeartIcon size="34" color={'black'} />
          <HeartIcon size="34" color={"black"} />
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
const styles = StyleSheet.create({
  container: {
    borderColor: '#9F9428',
    borderWidth: 0.4,
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 8,
    paddingLeft: 22,
    margin: 10,
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9F9428',
  },
  name: {
    fontSize: 16.3,
  },
  box: {
    borderWidth: 0.5,
    borderColor: 'white',
    marginHorizontal: 22,
    marginVertical: 4,
    backgroundColor: '#D8D8D8',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  list: {
    marginVertical: 9,
    fontSize: 22,
    color: 'black',
  },
});
const styles=StyleSheet.create({
  container:{
    borderColor:'#9F9428',
    borderWidth:0.4,
    borderRadius:24,
    paddingHorizontal:18,
    paddingVertical:8,
    paddingLeft:22,
    margin:10,
    marginTop:30,
    flex:1,
    flexDirection:'row',
    overflow: 'hidden',
    justifyContent:'space-between',
    alignItems:'center',
  },
  username:{
    fontSize:20,
    fontWeight:'bold',
    color:'#9F9428'
  },
  name:{
    fontSize:16.3,
  },
  box:{
    borderWidth:0.5,
    borderColor:'white',
    marginHorizontal:22,
    marginVertical:4,
    backgroundColor:'#D8D8D8',
    borderRadius:4,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  list:{
    marginVertical:9,
    fontSize:22,
    color:'black'
  }
})
export default ProfileScreen;
