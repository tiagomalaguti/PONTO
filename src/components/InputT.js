import { TextInput, StyleSheet, View } from "react-native";

export default () => {
    return (
        <View>
            <TextInput
                style={styles.container}
                keyboardType="numeric"
            ></TextInput>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
    },
});
