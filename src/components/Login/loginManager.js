// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../../firebase.config';

// export const intializeLoginFrameWork = () => {
//     if(!firebase.apps.length){
//       firebase.initializeApp(firebaseConfig);
//     }
// }

// export const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return firebase
//         .auth()
//         .signInWithPopup(googleProvider)
//         .then((res) => {
//         const {displayName, photoURL, email} = res.user;
//         const signInUser = {
//             isSignedIn: true,
//             name: displayName,
//             email: email,
//             img: photoURL,
//             success: true,
//         }   
//         return signInUser;
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
// };

// export const handleSignOut = () => {
//     return firebase.auth().signOut()
//     .then(res => {
//       //sign out successfull
//       const signOutUser = {
//         isSignedIn: false,
//         name: '',
//         email: '',
//         img: '',
//         success: false,
//       }
//       return signOutUser
//     })
//     .catch(err => {
//       //An error occurred
//       console.log(err.message)
//     })
//   }

// export const createUserWithEamilAndPassword = (name, email, password) => {
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(res => {
//         const newUserInfo = res.user;
//         newUserInfo.err = '';
//         newUserInfo.success = true;
//         newUserInfo.isSignedIn = true;
//         updateUserInfo(name);
//         return newUserInfo;
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const newUserInfo = {};
//         newUserInfo.success = false;
//         newUserInfo.err = error.message;
//         return newUserInfo;
//       });
// }

// export const signWithEmailAndPassword = (email, password) => {
//     return firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(res => {
//         const newUserInfo = res.user
//         newUserInfo.err = '';
//         newUserInfo.success = true;
//         newUserInfo.isSignedIn = true;
//         return newUserInfo;
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const newUserInfo = {};
//         newUserInfo.success = false;
//         newUserInfo.err = error.message;
//         return newUserInfo
//       });
// }

// const updateUserInfo = (name) => {
//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: name,
//     }).then(res => {
//       console.log('Update name successfully')
//     }).catch(err => {
//       console.log('update user not successfully')
//     });
//   }
