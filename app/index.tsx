import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/shared/modules/Button";
import Footer from "@/shared/modules/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/home/logo.png")} />

      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {"\n"} produtividade, {"\n"}
          <Text style={styles.bold}>mergulhe no que {"\n"} importa</Text>
        </Text>

        <Image
          source={require("../assets/images/home/home-frame.png")}
          style={styles.image}
        />

        <Button
          title="Quero iniciar!"
          onPress={() => router.navigate("/pomodoro")}
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 24,
  },
  inner: {
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 26,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    maxWidth: 350,
    maxHeight: 350,
    resizeMode: "contain",
  },
});
