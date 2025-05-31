import { View, Text, Image, StyleSheet, Pressable} from "react-native"
import { Link } from "expo-router"
import { FokusLogo } from "../components/icons"

export default function Index() {
  return (
    <View style={styles.container}>
      <FokusLogo/> 
      <Text style={styles.texto}>
        Otimize sua produtividade, mergulhe no que importa
      </Text>
      <Image source={require('../assets/images/telainicial.png')} style={styles.image}  resizeMode="contain"/>
      <Link style={styles.link} href={{ pathname: '/pomodoro' }}>
        <Pressable style={styles.button} >
        <Text style={styles.buttonText}>
            Quero iniciar
        </Text>
      </Pressable>
      </Link>
      <Text style={styles.footer}>Projeto fictício e sem fins comerciais.{"\n"}Desenvolvido por Alura.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#021123',
    gap: 20,
    width: '100%',
    paddingVertical: 12
  },
  texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 26
  },
  image: {
    width: '80%',
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123'
  },
  link: {
    padding: 8,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    color: '#98A0A8',
    textAlign: 'center'
  },
})