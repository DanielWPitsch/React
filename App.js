import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import telaInicial from "./componentes/tela1/TelaInicial"
import tela from "./componentes/tela2/Tela2"

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component = { telaInicial }/>
        <Tabs.Screen name="Perfil" component = { tela } />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};
