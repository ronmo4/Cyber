import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToQA = () => navigation.navigate('FAQ');
  const goToChatbot = () => navigation.navigate('Chatbot');
  const goToADV = () => navigation.navigate('ADV');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ברוכים הבאים! </Text>

      <View style={styles.buttonContainer}>
        <CustomButton
          text="שאלות ותשובות"
          onPress={goToQA}
          bgColor="#D32F2F"
          fgColor="#ffffff"
          iconName="help-circle"
        />
        <CustomButton
          text="שאל את הצ'אט"
          onPress={goToChatbot}
          bgColor="#FBC02D"
          fgColor="#ffffff"
          iconName="message-text-outline"
        />
        <CustomButton
          text="עורכי דין"
          onPress={goToADV}
          bgColor="#388E3C"
          fgColor="#ffffff"
          iconName="account-tie"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderRadius: 15,
    margin: 20,
    borderWidth: 2,
    borderColor: '#2f2f2f',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
});

export default HomeScreen;
