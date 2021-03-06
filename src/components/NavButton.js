import React from "react";
import {Button, StyleSheet} from 'react-native';

const NavButton = ({screenName, screenNav, navigation}) => {
    return <Button 
    title={screenName}
    onPress={() => navigation.navigate(screenNav)}
    />
};

const styles = StyleSheet.create({
    
});

export default NavButton;