import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"
import { FokusLogo } from "../components/icons"

export default function Index() {
  return (
    <View style={styles.container}>
      <FokusLogo/> 
      <Text style={styles.texto}>
        Otimize sua produtividade, mergulhe no que importa
      </Text>
      <Link href={{ pathname: '/pomodoro' }}>
        Quero iniciar!
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#021123',
    gap: 40
  },
  texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 26
  }
})