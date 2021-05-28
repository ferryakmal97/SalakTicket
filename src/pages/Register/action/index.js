// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import {Store} from '../../../redux/Store';
// import {CommonActions} from '@react-navigation/native';
// import {toastAndroidCenter} from '../../../api';
// import {createKeywords} from '../../../utils';

// export const _validator = async (
//   fullName,
//   username,
//   email,
//   phone,
//   password,
//   selectedItems,
//   navigation,
//   loading,
//   doneLoading,
// ) => {
//   let isValid = true;
//   if (fullName === '') {
//     isValid = false;
//     Store.dispatch({
//       type: 'FULLNAME',
//       payload: 'Full name field can not be empty',
//     });
//   } else {
//     Store.dispatch({type: 'FULLNAME', payload: ''});
//   }
//   if (email.trim() === '') {
//     isValid = false;
//     Store.dispatch({type: 'EMAIL', payload: 'Email field can not be empty'});
//   } else {
//     Store.dispatch({type: 'EMAIL', payload: ''});
//   }
//   if (username === '') {
//     isValid = false;
//     Store.dispatch({
//       type: 'USERNAME',
//       payload: 'Username field can not be empty',
//     });
//   } else {
//     Store.dispatch({type: 'USERNAME', payload: ''});
//   }
//   if (password === '') {
//     isValid = false;
//     Store.dispatch({
//       type: 'PASSWORD',
//       payload: 'Password field can not be empty',
//     });
//   } else {
//     Store.dispatch({type: 'PASSWORD', payload: ''});
//   }
//   if (phone === '') {
//     isValid = false;
//     Store.dispatch({
//       type: 'PHONE',
//       payload: 'Mobile phone field can not be empty',
//     });
//   } else {
//     Store.dispatch({type: 'PHONE', payload: ''});
//   }
//   if (isValid) {
//     const dataSet = {fullName, username, email, phone, selectedItems, password};
//     if (selectedItems === 1) {
//       navigation.navigate('RegisterStartup', dataSet);
//     } else if (selectedItems === 2) {
//       loading(),
//         await auth()
//           .createUserWithEmailAndPassword(email, password)
//           .then((request) => {
//             const keywordName = createKeywords(fullName);
//             saveToFirestore(
//               request.user.uid,
//               fullName,
//               request.user.email,
//               username,
//               selectedItems,
//               phone,
//               [],
//               [],
//               keywordName,
//               doneLoading,
//             );
//           })
//           .catch((error) => {
//             if (error.code === 'auth/email-already-in-use') {
//               console.log('That email address is already in use!');
//               doneLoading();
//               toastAndroidCenter('That email address is already in use!');
//             }
//             if (error.code === 'auth/invalid-email') {
//               console.log('That email address is invalid!');
//               doneLoading();
//               toastAndroidCenter('That email address is invalid!');
//             }
//           });
//     } else {
//       doneLoading();
//       toastAndroidCenter('You must select 1 register as');
//     }
//   }
// };

// const saveToFirestore = async (
//   uid,
//   fullName,
//   email,
//   username,
//   selectedItems,
//   phone,
//   follower,
//   following,
//   keywordName,
//   doneLoading,
// ) => {
//   return await firestore()
//     .collection('Users')
//     .doc(uid)
//     .set({
//       Uid: uid,
//       Full_Name: fullName,
//       Email: email,
//       Username: username,
//       Role: selectedItems,
//       Telephone: phone,
//       Follower: follower,
//       Following: following,
//       Phone: phone,
//       Follower: follower,
//       Following: following,
//       keywordName: keywordName,
//     })
//     .then(() => {
//       doneLoading();
//       toastAndroidCenter('Register Success');
//       console.log(
//         'Register Success',
//         uid,
//         fullName,
//         email,
//         username,
//         selectedItems,
//         phone,
//       );
//       CommonActions.navigate('MainApp');
//     })
//     .catch(() => {
//       doneLoading();
//       toastAndroidCenter('Register Failed');
//     });
// };
