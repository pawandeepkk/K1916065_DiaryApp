import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

const ListItem = ({caption, image}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.nameText}>{caption}</Text>
            <Image source={image} style={styles.img} />
        </View>
    );
};

const styles = StyleSheet.create({
    nameText: {
        fontSize: 25,
        fontFamily: 'ChalkboardSE-Bold',
        color: 'green',
        textAlign: 'center',

    },
    
    img: {
        width: 410,
        height: 250
    },

    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 5,
        marginVertical: 5,
    }
});

export default ListItem;