import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHQTG7edYCntqEth1FpjRB9rt9TengNh4",
  authDomain: "vue-basic-11092.firebaseapp.com",
  projectId: "vue-basic-11092",
  storageBucket: "vue-basic-11092.appspot.com",
  messagingSenderId: "270923202197",
  appId: "1:270923202197:web:36308fdb668b39ccda659c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }