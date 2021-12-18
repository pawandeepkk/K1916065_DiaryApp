import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Camera } from "expo-camera";

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted")
    };
    useEffect(() => {
        getPermission();
    }, []);
    if (hasPermission === null) {
        return <Text>Permission to use camera?</Text>
    }
    if (hasPermission === false) {
        return <Text>You did not give permission to use Camera</Text>
    }

    let camera;
    const getPicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            navigation.navigate('Photo', { uri : photo.uri })
        }
    }

    return (
        
            <View style={styles.container}>
                <Camera 
                    style={styles.subContainer}
                    ref={(ref) => { camera = ref; }}
                >
                    <Pressable style={styles.buttonStyle}
                        onPress={() => { getPicture(); }}
                    >
                        <Text style={styles.textStyle}>Take a Picture!</Text>
                    </Pressable>
                </Camera>

            </View>
        
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    buttonStyle: {
        flex: 0.2,
        alignItems: "center"
    },
    textStyle: {
        fontSize: 24,
        marginBottom: 15,
        color: 'yellow'
    }
});


export default CameraScreen;