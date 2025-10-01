import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import ProductsScreen from "./components/ProductsScreen";
import FavoritesScreen from "./components/FavoritesScreen";
import ProductDetailsScreen from "./components/ProductDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab Home gồm 2 màn
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Products") {
            iconName = "list";
          } else if (route.name === "Favorites") {
            iconName = "heart";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

// Stack chính
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ title: "Chi tiết sản phẩm" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
