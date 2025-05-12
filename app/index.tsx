import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/rest/short_rest.png")} />
      
      <View style={styles.actions}>
        <Text style={styles.timer}>
          24:00
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: '#ffffff',
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#b872ff",
    borderRadius: 32,
    padding: 8
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98a0ab",
    fontSize: 12.5,
  }
})
