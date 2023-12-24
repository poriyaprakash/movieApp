import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
    } catch (error) {
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

  // const handleSignUp = async () => {
  //   if (password !== confirmPassword) {
  //     console.error('Passwords do not match.');
  //     return;
  //   }

  //   try {
  //     await auth().createUserWithEmailAndPassword(email, password);
  //   } catch (error) {
  //     console.error('Error signing up:', error.message);
  //   }
  //   navigation.navigate("Login");
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        // onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        // onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        // onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button title="Sign Up"
      // onPress={handleSignUp}
       />
      <Text style={styles.or}>OR</Text>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        // onPress={signInWithGoogle}
      />
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
    fontSize: 24,
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
});

export default SignupScreen;
