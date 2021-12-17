import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

const Counter = () => {
    return (
        <View>
            <h1>0</h1>
        </View>
    );
};

const styles = StyleSheet.create({

});

ReactDOM.render(<Counter />, document.getElementById("root"));
export default Counter;