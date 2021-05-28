// // Buat Login Reusable
// // example Fungsi Time

// import messaging from '@react-native-firebase/messaging';
// import axios from 'axios';
// import {AppState, ToastAndroid} from 'react-native';
// import {Store} from '../redux/Store';
// import {showMessageNotification} from '../utils/ShowMessages';
// import {apiFcm, serverKeyCloudMessaging, userPublicRef} from './constants';

// export const toastAndroidCenter = (msg) => {
//   ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
// };

// export const showNotification = () => {
//   const not = Store.getState().GeneralSettingReducer.chatNotification
//     ? messaging().onMessage(async (remoteMessage) => {
//         showMessageNotification(
//           remoteMessage.notification.title,
//           remoteMessage.notification.body,
//         );
//       })
//     : console.log('tesnot 2');
//   return not;
// };

// export const handleOlineUser = () => {
//   const uid = Store.getState().DataUserReducer.allDataUser.Uid;
//   if (AppState.currentState.match('active')) {
//     return userPublicRef.doc(uid).update({isOnline: true});
//   }
//   if (AppState.currentState.match('background')) {
//     return userPublicRef.doc(uid).update({
//       isOnline: false,
//     });
//   }
// };

// // export const statusApp = () => {
// //   if (AppState.currentState.match('active')) {
// //     return Store.dispatch({type: 'STATUS-APP', payload: true});
// //   }
// //   if (AppState.currentState.match('background')) {
// //     return Store.dispatch({type: 'STATUS-APP', payload: false});
// //   }
// // };

// export const sendNotificationMessage = (token, title, body) => {
//   axios
//     .post(
//       apiFcm,
//       {
//         registration_ids: token,
//         collapse_key: 'type_a',
//         notification: {
//           title: title,
//           body: body,
//         },
//         data: {
//           body: body,
//           title: title,
//         },
//       },
//       {
//         headers: {
//           'Content-type': 'application/json',
//           Authorization: `key=${serverKeyCloudMessaging}`,
//         },
//       },
//     )
//     .then(() => {
//       console.log('sukses kirim notif', token, title, body);
//     })
//     .catch(() => {
//       console.log('failed kirim notif', token, title, body);
//     });
// };
