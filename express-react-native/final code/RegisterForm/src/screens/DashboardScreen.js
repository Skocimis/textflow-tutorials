import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DashboardScreen({navigation}) {

  return <View style={styles.container}>
    <View style={styles.dashboard}>
      <Text style={styles.header}>Dashboard</Text>
      <Text style={styles.subheader}>Welcome, you are signed in. </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Register")
          return;
        }}>
        <Text style={styles.btntext}>Sign out</Text>
      </TouchableOpacity>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60
  },
  dashboard: {
    alignSelf: "stretch"
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1
  },
  subheader: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 25
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: "#59cbbd",
    borderBottomWidth: 1
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold"
  }
})