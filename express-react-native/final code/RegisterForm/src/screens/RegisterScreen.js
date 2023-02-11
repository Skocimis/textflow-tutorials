
import { Button, View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RegForm from "../components/RegForm";

export default function RegisterScreen({ navigation }) {
    return <View style={styles.container}>
        <RegForm navigation={navigation}></RegForm>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#36485f",
        paddingLeft: 60,
        paddingRight: 60
    }
})