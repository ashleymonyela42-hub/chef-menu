import React from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
const Courses = ({ navigation }) => [
    'Starter',
    'Main course',
    'Dessert',
    'Beverage'
];
  export default function AddMenu({ navigation, menuItems, setMenuItems }) {}
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [course, setCourse] = React.useState(Courses()[0]);
    
    const SaveMenuItem = () => {
        if (!name || !description || !price) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice) || numericPrice <= 0) {
            Alert.alert("Error", "Please enter a valid price.");
            return;
        }

        const newMenuItem = {
            id: Date.now().toString(),
            name: name.trim(),
            description: description.trim(),
            price: numericPrice,
            course
        };

        setMenuItems([...menuItems, newMenuItem]);
        setName("");
        setDescription("");
        setPrice("");
        setCourse(Courses()[0]);
        Alert.alert("Success", "Menu item added successfully!");
    
        navigation.navigate("Menu items");
    }
         return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.container}>
            <Text style={styles.title}>Add Menu Item</Text>
            <Text style={styles.label}>Dish Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter dish name"
                value={name}
                onChangeText={setName}/>
            <Text style={styles.label}>Description:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter description"
                value={description}
                onChangeText={setDescription}/>
            <Text style={styles.label}>Price:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Course:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter course"
                value={course}
                onChangeText={setCourse}
            />
            <TouchableOpacity style={styles.button} onPress={SaveMenuItem}>
                <Text style={styles.buttonText}>Save Menu Item</Text>
            </TouchableOpacity>
        </ScrollView>
    );