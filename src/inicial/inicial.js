import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import InputT from "../components/InputT";

export default () => {
    const [Dados, setDados] = React.useState("0");
    function atualizar() {
        let data = new Date();
        data.setHours(19);
        data.setMinutes(55);

        data.setHours(data.getHours() + 6);
        data.setMinutes(data.getMinutes() + 20);

        console.warn(data.getHours() + ":" + data.getMinutes());
        setDados(data.getHours() + ":" + data.getMinutes());
    }

    return (
        <View>
            <Text style={styles.text}>{Dados}</Text>
            <Text></Text>

            <Button title="teste" onPress={atualizar}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});
