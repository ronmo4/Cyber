import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomButton = ({ onPress, text, bgColor, fgColor, iconName }) => {
    return (
        <Pressable onPress={onPress} style={[
            buttonStyles.container,
            bgColor ? { backgroundColor: bgColor } : {}
        ]}>
            <View style={buttonStyles.content}>
                <Text numberOfLines={1} style={[
                    buttonStyles.text,
                    fgColor ? { color: fgColor } : {},
                ]}>{text}</Text>
                {iconName && <Icon name={iconName} size={24} color={fgColor || 'white'} style={buttonStyles.icon} />}
            </View>
        </Pressable>
    );
}

const buttonStyles = StyleSheet.create({
    container: {
        width: '80%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1, // Take up remaining space
        minWidth: 0, // Allow text to shrink
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    icon: {
        marginLeft: 0, // Add margin to separate text and icon
    },
});

export default CustomButton;
