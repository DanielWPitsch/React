import { Text, View, StyleSheet, Image } from 'react-native';

import Frutas from "../../assets/frutas.jpg"
import estilos from "./Estilo"

export default function TelaInicial() {
  return (
    <View style={ estilos.container }>
      <Text style={estilos.titulo}>
        Texto, Imagem, Componentes, Estilo e Navegação
      </Text>
      <Text  style={ estilos.paragrafo}>
        Testando por imagens por link
      </Text>
      <Image
        source={ { uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/888090/capsule_616x353.jpg?t=1535993089'} }
        style={ estilos.img }
      />
      <Text  style={ estilos.paragrafo}>
        Testando por imagens local
      </Text>
      <Image
        source={ Frutas }
        style={ estilos.img }
      />
    </View>
  );
}