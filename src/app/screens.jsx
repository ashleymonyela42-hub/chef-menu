import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default function HomeScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    <Text style={styles.text}>Welcome to the Chef's Menu Manager!</Text>
    <Text style={styles.title}>Chef's Menu Manager:</Text>
    <Text style={styles.title}>Welcome to the menu Manager.</Text>
    <Text style={styles.text}>Manage your menu items easily from your mobile device.</Text>
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Add Menu items")}
    >
      <Text style={styles.buttonText}>Add menu items</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Menu items")}
    >
      <Text style={styles.buttonText}>View menu items</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Edit Menu items")}
    >
      <Text style={styles.buttonText}>Edit menu items</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Statistics")}
    >
      <Text style={styles.buttonText}>View statistics</Text>
    </TouchableOpacity>


    </View>
  );
}
