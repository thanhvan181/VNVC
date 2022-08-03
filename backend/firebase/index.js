import firebase from "firebase-admin";

import * as serviceAccount from '../config/configServerfirebase.json'

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});
export default firebase;