import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoros = [
  {
    id: "focus",
    initialValue: 25,
    image: require('../assets/images/rest/focus.png'),
    display: "Foco"
  },
  {
    id: "short",
    initialValue: 5,
    image: require('../assets/images/rest/short.png'),
    display: "Pausa curta"
  },
  {
    id: "long",
    initialValue: 15,
    image: require('../assets/images/rest/long.png'),
    display: "Pausa longa"
  },
]

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoros[0])

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoros.map(pomodoro => (
            <Pressable 
              key={pomodoro.id}
              style={timerType.id === pomodoro.id
                ? styles.contextButtonActive
                : styles.contextButton
              }
              onPress={() => setTimerType(pomodoro)}
            >
              <Text style={styles.contextButtonText}>{pomodoro.display}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.timer}>
          { new Date(timerType.initialValue * 1000)
            .toLocaleTimeString('pt-BR', { 
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit"
            }) 
          }
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
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  contextButton: {
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: "#ffffff",
    padding: 8
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
