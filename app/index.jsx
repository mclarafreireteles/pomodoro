import { useState } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.svg')
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short.svg')
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./short.svg')
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} style={styles.image}/>
      <View style={styles.actions}>
      <View style={styles.context}>
        <Pressable style={styles.contextButtonActive}>
          <Text style={styles.contextButtonText}>
            Foco
          </Text>
        </Pressable>
        <Pressable>
          <Text style={styles.contextButtonText}>
            Pausa curta
          </Text>
        </Pressable>
        <Pressable>
          <Text style={styles.contextButtonText}>
            Pausa longa
          </Text>
        </Pressable>
      </View>
        <Text style={styles.timer}>
          25:00
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  image: {
    width: '80%'
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  },
  timer: {
    fontSize: 54,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123'
  }
})
