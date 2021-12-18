import React from "react";
import { StyleSheet, View, Button, Modal, Text, Animated, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const PopUpAlert = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]
    );
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };
    return <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
            <Animated.View style={[styles.modalContainer, {transform:[{scale: scaleValue}]}]}>
                {children}
            </Animated.View>
        </View>
    </Modal>
};

const PopUp = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <View style={{flex: 1, justifyContent: "center", }}>
            <PopUpAlert visible={visible}>
                <View style={{alignItems: "center"}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems:"center"}}>
                    <FontAwesome5 name="smile-beam" size={100} color="skyblue" />
                </View>
                <Text style={{
                              marginVertical: 30,
                              fontFamily:'ChalkboardSE-Bold',
                              fontWeight: 'bold',
                              fontSize: 35,
                              textAlign: 'center',
                            }}> Well done!
                </Text>
            </PopUpAlert>
            <Button title="Press me!" onPress={() => setVisible(true)} />
        </View>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});


export default PopUp;