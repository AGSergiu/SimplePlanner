import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

import styles from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title>Hello {'Username'}</Title>
    </View>
  );
};

export default Home;
