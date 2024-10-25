import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '356361721466-hi8bdashlvfaiodbkc188sjp34j1q3e6.apps.googleusercontent.com',
  // androidClientId: GOOGLE_ANDROID_CLIENT_ID,
  // iosClientId: GOOGLE_IOS_CLIENT_ID,
  scopes: ['profile', 'email'],
});

const LoginScreen = props => {
  const {navigation} = props;
  const [userInfo, setUserInfo] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //BackHandler in Android
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    return () =>
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
  }, []);

  const handleBackButtonClick = () => {
    Alert.alert('', 'Are you want to exit App?', [
      {
        text: 'NO',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
    ]);
    return true;
  };

  const GoogleLogin = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const {idToken, user} = response;

      // if (idToken) {
      // 	const resp = await authAPI.validateToken({
      // 		token: idToken,
      // 		email: user.email,
      // 	});
      // 	await handlePostLoginData(resp.data);
      // }
    } catch (apiError) {
      setError(
        apiError?.response?.data?.error?.message || 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1">
      <Image
        source={require('../../../public/assets/images/marketPlace.png')}
        className="w-full h-[40%] "
      />
      <View
        className="flex-1 mt-[-20px] bg-white rounded-t-3xl "
        style={styles.container}>
        <View className="flex-col pr-7 pl-7" style={styles.txtContainer}>
          <Text className=" text-[26px] text-black p-3 ">
            Commuinity MarketPlace
          </Text>
          <Text className="text-center text-[16px]">
            Buy sell MarketPlace where you can sell old item make real money
          </Text>
        </View>
        <TouchableOpacity
          className="bg-blue-600  rounded-full m-6 mt-10 p-3"
          onPress={() => {
            navigation.replace('DashboardStack');
          }}>
          <Text className="text-center text-[20px] text-white">
            Get Started
          </Text>
        </TouchableOpacity>
        {/* <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            handleG
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  txtContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
