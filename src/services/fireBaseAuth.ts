import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';


// send otp
export const sendPhoneOTP = async (phoneNumber: string) => {
  return await auth().signInWithPhoneNumber(phoneNumber);
};

// verify otp
// export const verifyPhoneOTP = async (confirmation: any, code: string) => {
//   return await confirmation.confirm(code);
// };

export const verifyPhoneOTP = async (
  confirmation: FirebaseAuthTypes.ConfirmationResult,
  otp: string
) => {
  return await confirmation.confirm(otp);
};
