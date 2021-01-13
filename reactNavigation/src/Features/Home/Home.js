import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = (props) => {
  const actionMoveToAbout = () => {
    props.navigation.navigate('AboutScreen');
  };
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={actionMoveToAbout}>
        <Text>Move to About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
