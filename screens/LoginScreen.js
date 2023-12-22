import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from "@react-native-firebase/auth";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1045083224760-82uauon23oftmbokn9c78ta1n1eharvt.apps.googleusercontent.com',
    });
  }, [])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredentials);
    } catch (error) {
      console.log("got error:",error.message)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } 
      else if (error.code === statusCodes.IN_PROGRESS) {
      } 
      else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } 
      else {
      }
    }
  };
  const handleSignIn = async () => {
    if (email.trim() === '' || password.trim()==='') {
      console.warn('Email or password is required!!');
    } 
    else{
      try {
        await auth().signInWithEmailAndPassword("prakashporiya2021@gmail.com",'123456');
      } 
      catch (error) {
        console.error('Error signing in:');
      }
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign In"
        onPress={handleSignIn}
      />

      <Text style={styles.or}>OR</Text>

      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <Text style={styles.registerText}>New Account? Register Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131313'
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  or: {
    marginVertical: 10,
  },
  googleButton: {
    width: 192,
    height: 48,
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
