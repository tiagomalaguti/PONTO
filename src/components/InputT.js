import { TextInput, StyleSheet, View } from "react-native";

export default (props) => {
    return (
        <View>
            <TextInput style={styles.inputT} keyboardType="numeric" />
        </View>
    );
};
const styles = StyleSheet.create({
    container0: {
        alignItems: "center",
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
    },
});
