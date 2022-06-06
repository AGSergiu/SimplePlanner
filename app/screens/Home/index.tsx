import Calendar from '../../components/Calendar'
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import styles from './styles';
import { TodoInput } from 'app/components/TodoInput';



const Home: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Calendar />
        {/* <TodoContainer /> */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <TodoInput />
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Home;
