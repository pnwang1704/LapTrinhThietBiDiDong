import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
// or any files within the Snack
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import ProductDetailScreen from './components/ProductDetailScreen'

export default function App() {
  const Stack = createStackNavigator();
  return (
          <NavigationContainer>
              <Stack.Navigator screenOption={{headerShown: false}}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} ></Stack.Screen>
                    <Stack.Screen name="ProductScreen" component={ProductScreen}></Stack.Screen>
                    <Stack.Screen name ="ProductDetailScreen" component={ProductDetailScreen}></Stack.Screen>
              </Stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  

});
