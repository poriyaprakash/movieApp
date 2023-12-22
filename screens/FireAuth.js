/* eslint-disable prettier/prettier */
import firebase from 'firebase';
import Auth from './auth';

const FireAuth = class {
  user = null;
  profile = null;
  onUserChange = null;
  onLogout = null;
  onEmailVerified = null;
  onLogin = null;
  onError = null;

  init(googleConfig) {
    Auth.Google.configure(googleConfig);
  }

  setup = (onLogin, onUserChange, onLogout, onEmailVerified, onError) => {
    this.onUserChange = onUserChange;
    this.onLogout = onLogout;
    this.onEmailVerified = onEmailVerified;
    this.onLogin = onLogin;
    this.onError = onError;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Determine if user needs to verify email
        var emailVerified =
          !user.providerData ||
          !user.providerData.length ||
          user.providerData[0].providerId !== 'password' ||
          user.emailVerified;

        // Upsert profile information
        var profileRef = firebase.database().ref(`profiles/${user.uid}`);
        profileRef.update({emailVerified: emailVerified, email: user.email});

        profileRef.on('value', profile => {
          const val = profile.val();

          // Email become verified in session
          if (
            val.emailVerified &&
            this.profile &&
            !this.profile.val().emailVerified
          ) {
            this.onEmailVerified && this.onEmailVerified();
          }

          if (!this.user) {
            this.onLogin && this.onLogin(user, val); // On login
          } else if (val) {
            this.onUserChange && this.onUserChange(user, val); // On updated
          }

          this.profile = profile; // Store profile
          this.user = user; // Store user
        });
      } else {
        this.profile = null;
        this.user = null; // Clear user and logout
        this.onLogout && this.onLogout();
      }
    });
  };

  // Rest of the methods remain unchanged from the original code
  // ...
};

export default new FireAuth();
