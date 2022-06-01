import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import InputT from "../components/InputT";

export default () => {
    const [hrEntrada, sethrEntrada] = React.useState(null);
    const [MNentrada, setMNentrada] = React.useState(null);
    const [CHdiaria, setCHdiaria] = React.useState(null);
    const [CMdiaria, setCMdiaria] = React.useState(null);
    const HrNoturnaInicial = 22.0;
    const HrNoturnaFinal = 5.0;

    function calcular() {
        let conm = parseFloat(MNentrada) / 60 + parseFloat(hrEntrada);
        let minAux = 0;
        console.log(hrEntrada);

        if (conm + 10.33333333 > 22.0) {
            minAux = conm - 22.0;
            console.warn(minAux);
        }
    }

    return (
        <View>
            <View>
                <View>
                    <Text>Hora Entrada</Text>
                </View>
                <View style={styles.container}>
                    <InputT
                        value={hrEntrada}
                        onChangeText={(event) =>
                            sethrEntrada(event.target.value)
                        }
                    ></InputT>
                    <Text>:</Text>
                    <InputT value={MNentrada}></InputT>
                </View>
            </View>
            <View>
                <View>
                    <Text>Carga Diaria</Text>
                </View>
                <View style={styles.container}>
                    <InputT value={CHdiaria}></InputT>
                    <Text>:</Text>
                    <InputT value={CMdiaria}></InputT>
                </View>
            </View>
            <View>
                <Button title="calcular" onPress={calcular}></Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
});
