import firestore from '@react-native-firebase/firestore';
import {Dimensions} from 'react-native';

// Buat naroh static value\
export const {width, height} = Dimensions.get('window');

export const apiFcm = 'https://fcm.googleapis.com/fcm/send';

export const serverKeyCloudMessaging =
  'AAAADpwqr-s:APA91bHsMMbK5nUJNSrg1rtbxDEvlQXMvPPNUX3406VXHCt0qRQ5OCyA1EzI0dkAdKU87VyMY0pHo9qlxKL9VDJ3JXWWqnuGk4zWF3T-DPIGNu3Da3H65MXW1RPzJlgyIVmeulLnOu3Z';

export const userPublicRef = firestore().collection('Users');
export const textAgreementService = `
  <h1>Terms and conditions</h1>
  <p style='text-align: justify';>These terms and conditions ("Agreement") set forth the general terms and conditions of your use of the
  "Fundway App" mobile application ("Mobile Application" or "Service") and any of its related products and services (collectively, "Services").
  This Agreement is legally binding between you ("User", "you" or "your") and this Mobile Application developer ("Operator", "we", "us" or "our").
  By accessing and using the Mobile Application and Services, you acknowledge that you have read, understood, and agree to be bound by
  the terms of this Agreement. If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you
  have the authority to bind such entity to this Agreement, in which case the terms "User", "you" or "your" shall refer to such entity.
  If you do not have such authority, or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not
  access and use the Mobile Application and Services. You acknowledge that this Agreement is a contract between you and the Operator,
  even though it is electronic and is not physically signed by you, and it governs your use of the Mobile Application and Services.</p>
  <h1>Disclaimer</h1>
  <p style='text-align: justify';>This disclaimer ("Disclaimer") sets forth the general guidelines, disclosures, and terms of your use of the
  "Fundway App" mobile application ("Mobile Application" or "Service") and any of its related products and services
  (collectively, "Services"). This Disclaimer is a legally binding agreement between you ("User", "you" or "your")
  and this Mobile Application developer ("Operator", "we", "us" or "our"). By accessing and using the Mobile Application
  and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Disclaimer.
  If you are entering into this Disclaimer on behalf of a business or other legal entity, you represent that you have the
  authority to bind such entity to this Disclaimer, in which case the terms "User", "you" or "your" shall refer to such entity.
  If you do not have such authority, or if you do not agree with the terms of this Disclaimer, you must not accept this Disclaimer
  and may not access and use the Mobile Application and Services. You acknowledge that this Disclaimer is a contract between you and
  the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Mobile Application
  and Services.</p>
  <h1>Privacy Policy</h1>
  <p style='text-align: justify';>This privacy policy ("Policy") describes how the personally identifiable information ("Personal Information") you may provide in
  the "Fundway App" mobile application ("Mobile Application" or "Service") and any of its related products and services (collectively,
  "Services") is collected, protected and used. It also describes the choices available to you regarding our use of your Personal
  Information and how you can access and update this information. This Policy is a legally binding agreement between you
  ("User", "you" or "your") and this Mobile Application developer ("Operator", "we", "us" or "our"). By accessing and using
  the Mobile Application and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy.
  This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
  </p>

`;
export const items = [
  {
    value: 'Startup',
  },
  {
    value: 'Investor',
  },
];
export const selectYear = [
  {id: '1', value: '2000'},
  {id: '2', value: '2001'},
  {id: '3', value: '2002'},
  {id: '4', value: '2003'},
  {id: '5', value: '2004'},
  {id: '6', value: '2005'},
  {id: '7', value: '2006'},
  {id: '8', value: '2007'},
  {id: '9', value: '2008'},
  {id: '10', value: '2009'},
  {id: '11', value: '2010'},
  {id: '12', value: '2011'},
  {id: '13', value: '2012'},
  {id: '14', value: '2013'},
  {id: '15', value: '2014'},
  {id: '16', value: '2015'},
  {id: '17', value: '2016'},
  {id: '18', value: '2017'},
  {id: '19', value: '2018'},
  {id: '20', value: '2019'},
  {id: '21', value: '2020'},
];

export const selectRegion = [
  {id: '1', value: 'Jakarta'},
  {id: '2', value: 'Bogor'},
  {id: '3', value: 'Bandung'},
  {id: '4', value: 'Depok'},
  {id: '5', value: 'Tangerang'},
];
