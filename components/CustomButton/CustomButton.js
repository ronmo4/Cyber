import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomButton = ({ onPress, text, bgColor, fgColor, iconName }) => {
    return (
        <Pressable onPress={onPress} style={[
            buttonStyles.container,
            bgColor ? { backgroundColor: bgColor } : {}
        ]}>
            {iconName && <Icon name={iconName} size={24} color={fgColor || 'white'} style={buttonStyles.icon} />}
            <Text style={[
                buttonStyles.text,
                fgColor ? { color: fgColor } : {},
            ]}>{text}</Text>
        </Pressable>
    );
}

const buttonStyles = StyleSheet.create({
    container: {
        width: '80%', // שינוי רוחב הכפתור
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 25, // קצוות מעוגלים יותר
        flexDirection: 'row', 
        justifyContent: 'center', 
    },
    text: {
        fontWeight: 'bold',
        color: 'white', // שינוי צבע טקסט דיפולטיבי
    },
    icon: {
        marginRight: 10,
    },
});

export default CustomButton;