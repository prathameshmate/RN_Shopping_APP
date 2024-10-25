import {View, Text, BackHandler, Alert} from 'react-native';
import React, {useEffect} from 'react';

const Home = () => {
  console.log('hiii :>>');
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
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
