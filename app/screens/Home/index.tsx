import Calendar from '../../components/Calendar'
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import styles from './styles';
import { TodoInput } from 'app/components/TodoInput';
import TodoContainer from 'app/components/TodoContainer';



const Home: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Calendar />
        <TodoContainer />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardStyle}
        >
          <TodoInput />
        </KeyboardAvoidingView>
      </View>
    </>
  );
};


export default Home;
