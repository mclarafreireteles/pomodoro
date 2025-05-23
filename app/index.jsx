import { Image, StyleSheet, View, Text, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./pomodoro.svg')} />
      <View style={styles.actions}>

        <Text style={styles.timer}>
          25:00
        </Text>
        <Pressable style={styles.button}>
          Começar
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
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480'
  },
  timer: {
    fontSize: 54,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  }
})
