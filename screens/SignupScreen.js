// /* eslint-disable prettier/prettier */
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your Web Client ID from Google Cloud Console
// });

// const SignupScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken, null);
//       await auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       console.error('Error signing in with Google:', error);
//     }
//   };

//   const handleSignUp = async () => {
//     if (password !== confirmPassword) {
//       console.error('Passwords do not match.');
//       return;
//     }

//     try {
//       await auth().createUserWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//     }
//     navigation.navigate("Login");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//         onChangeText={(text) => setConfirmPassword(text)}
//       />
//       <Button title="Sign Up" onPress={handleSignUp} />
//       <Text style={styles.or}>OR</Text>
//       <GoogleSigninButton
//         style={styles.googleButton}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={signInWithGoogle}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//   },
//   or: {
//     marginVertical: 10,
//   },
//   googleButton: {
//     width: 192,
//     height: 48,
//   },
// });

// export default SignupScreen;
