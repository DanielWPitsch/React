import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      fontSize: 22,
      marginTop: 20,
      marginBottom: 10,
    },
    img: {
      width: 550,
      height: 250,
      marginTop: 30,
      marginBottom: 30,
      borderRadius: 75,
      borderColor: '#000',
      borderWidth: 2
    },
    titulo: {
        fontSize: 60,
        fontWeight: "bold",
    }
  });

  export default estilos;