import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from "../../components/CustomButton";

const HomeScreen = () => {

    const goToChetBox = () => console.warn("chet box");
    const goToQA = () => console.warn("QA");

    return (
        <View style={styles.container}>
        
            <View style={styles.frame}>
            <Image
                source={{uri: 'https://shtaavura.co.il/wp-content/uploads/2022/05/%D7%A0%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%A2%D7%91%D7%99%D7%A8%D7%95%D7%AA-%D7%AA%D7%A0%D7%95%D7%A2%D7%94.jpg'}}
                style={styles.logo}
            />
                <CustomButton
                    iconName="help-circle"
                    text="שאלות ותשובות"
                    onPress={goToQA}
                    bgColor="#4ECCA3"
                    fgColor="white"
                />
                <CustomButton
                    iconName="message-text-outline"
                    text="שאל את הצ'אט"
                    onPress={goToChetBox}
                    bgColor="#F85F6A"
                    fgColor="white"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 300,
        height: 400,
        marginBottom: 50,
    },
    frame: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', 
        padding: 20,
        borderRadius: 20, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});



export default HomeScreen;
