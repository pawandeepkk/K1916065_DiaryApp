import React from "react";
import { StyleSheet, View, Image } from "react-native";

const StoredPictures = ({route}) => {
    const {uri} = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: uri }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageStyle: {
        flex: 1,
        alignSelf: 'stretch'
    }
});


export default StoredPictures;
