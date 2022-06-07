import React from 'react';
import LottieView from 'lottie-react-native'; // if you have "esModuleInterop": true
import { Text } from 'react-native';

class EmptyState extends React.PureComponent {
  render() {
    return (
      <LottieView
        style={{ flex: 1 }}
        source={require('../../assets/empty_todo.json')}
        autoPlay
        loop />
    );
  }
}

export default (EmptyState)