import React, { useState } from "react";
import {Button, View, Text, StyleSheet} from 'react-native-paper';

const Hooks = () => {
    const contador = 1;
    return (
        <View style={StyleSheet.container}>
            <Text>Valor: </Text>{contador}
        </View>
    )

}

export default Hooks;