import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const About = (props) => {
  const actionMoveToHome = () => {
    props.navigation.navigate('HomeScreen');
  };
  return (
    <View>
      <Text>About</Text>
      <TouchableOpacity onPress={actionMoveToHome}>
        <Text> Move to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
