import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Inicial from "./src/inicial/inicial";

export default function App() {
    return (
        <View style={styles.container}>
            <Inicial></Inicial>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
