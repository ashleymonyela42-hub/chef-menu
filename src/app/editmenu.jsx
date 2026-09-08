import { useState } from 'react';

import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const courses = [
  'Starter',
  'Main Course',
  'Dessert',
];

export default function EditMenuScreen({
  navigation,
  route,
  menuItems,
  setMenuItems,
}) {

  const { itemId } = route.params;

  const item = menuItems.find(
    (menuItem) => menuItem.id === itemId
  );

  const [name, setName] =
    useState(item ? item.name : '');

  const [description, setDescription] =
    useState(item ? item.description : '');

  const [course, setCourse] =
    useState(item ? item.course : '');

  const [price, setPrice] =
    useState(item ? String(item.price) : '');

  const updateItem = () => {

    if (
      !name.trim() ||
      !description.trim() ||
      !course ||
      !price.trim()
    ) {

      Alert.alert(
        'Error',
        'Please complete all fields.'
      );

      return;
    }

    const numericPrice = Number(price);

    if (
      isNaN(numericPrice) ||
      numericPrice <= 0
    ) {

      Alert.alert(
        'Invalid Price',
        'Please enter a valid price.'
      );

      return;
    }

    const updatedItems =
      menuItems.map((menuItem) => {

        if (menuItem.id === itemId) {

          return {
            ...menuItem,

            name: name.trim(),

            description:
              description.trim(),

            course: course,

            price: numericPrice,
          };
        }

        return menuItem;
      });

    setMenuItems(updatedItems);

    Alert.alert(
      'Success',
      'Menu item updated successfully!'
    );

    navigation.navigate('Menu Items');
  };

  if (!item) {

    return (
      <View style={styles.errorContainer}>

        <Text style={styles.errorText}>
          Menu item not found.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.goBack()
          }
        >
          <Text style={styles.buttonText}>
            GO BACK
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Text style={styles.title}>
        Update Menu Item
      </Text>

      <Text style={styles.label}>
        Dish Name
      </Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Description
      </Text>

      <TextInput
        style={[
          styles.input,
          styles.descriptionInput,
        ]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>
        Course
      </Text>

      {courses.map((itemCourse) => (

        <TouchableOpacity
          key={itemCourse}
          style={[
            styles.courseButton,

            course === itemCourse &&
            styles.selectedCourse,
          ]}
          onPress={() =>
            setCourse(itemCourse)
          }
        >

          <Text
            style={[
              styles.courseText,

              course === itemCourse &&
              styles.selectedCourseText,
            ]}
          >
            {itemCourse}
          </Text>

        </TouchableOpacity>

      ))}

      <Text style={styles.label}>
        Price (R)
      </Text>

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateItem}
      >
        <Text style={styles.buttonText}>
          UPDATE MENU ITEM
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() =>
          navigation.goBack()
        }
      >
        <Text style={styles.cancelText}>
          CANCEL
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F5FC',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#333333',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 9,
    height: 52,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 18,
  },

  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 13,
  },

  courseButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#5B2CB6',
    borderRadius: 8,
    padding: 13,
    marginBottom: 8,
  },

  selectedCourse: {
    backgroundColor: '#5B2CB6',
  },

  courseText: {
    textAlign: 'center',
    color: '#5B2CB6',
    fontWeight: 'bold',
  },

  selectedCourseText: {
    color: '#FFFFFF',
  },

  button: {
    backgroundColor: '#5B2CB6',
    height: 55,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  cancelButton: {
    height: 55,
    borderWidth: 1.5,
    borderColor: '#5B2CB6',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  cancelText: {
    color: '#5B2CB6',
    fontWeight: 'bold',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  errorText: {
    fontSize: 18,
    marginBottom: 20,
  },

});





  const { itemId } = route.params;

  const item = menuItems.find(
    (menuItem) => menuItem.id === itemId
  );

  const [name, setName] =
    useState(item ? item.name : '');

  const [description, setDescription] =
    useState(item ? item.description : '');

  const [course, setCourse] =
    useState(item ? item.course : '');

  const [price, setPrice] =
    useState(item ? String(item.price) : '');

  const updateItem = () => {

    if (
      !name.trim() ||
      !description.trim() ||
      !course ||
      !price.trim()
    ) {

      Alert.alert(
        'Error',
        'Please complete all fields.'
      );

      return;
    }

    const numericPrice = Number(price);

    if (
      isNaN(numericPrice) ||
      numericPrice <= 0
    ) {

      Alert.alert(
        'Invalid Price',
        'Please enter a valid price.'
      );

      return;
    }

    const updatedItems =
      menuItems.map((menuItem) => {

        if (menuItem.id === itemId) {

          return {
            ...menuItem,

            name: name.trim(),

            description:
              description.trim(),

            course: course,

            price: numericPrice,
          };
        }

        return menuItem;
      });

    setMenuItems(updatedItems);

    Alert.alert(
      'Success',
      'Menu item updated successfully!'
    );

    navigation.navigate('Menu Items');
  };

  if (!item) {

    return (
      <View style={styles.errorContainer}>

        <Text style={styles.errorText}>
          Menu item not found.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.goBack()
          }
        >
          <Text style={styles.buttonText}>
            GO BACK
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Text style={styles.title}>
        Update Menu Item
      </Text>

      <Text style={styles.label}>
        Dish Name
      </Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Description
      </Text>

      <TextInput
        style={[
          styles.input,
          styles.descriptionInput,
        ]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>
        Course
      </Text>

      {courses.map((itemCourse) => (

        <TouchableOpacity
          key={itemCourse}
          style={[
            styles.courseButton,

            course === itemCourse &&
            styles.selectedCourse,
          ]}
          onPress={() =>
            setCourse(itemCourse)
          }
        >

          <Text
            style={[
              styles.courseText,

              course === itemCourse &&
              styles.selectedCourseText,
            ]}
          >
            {itemCourse}
          </Text>

        </TouchableOpacity>

      ))}

      <Text style={styles.label}>
        Price (R)
      </Text>

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateItem}
      >
        <Text style={styles.buttonText}>
          UPDATE MENU ITEM
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() =>
          navigation.goBack()
        }
      >
        <Text style={styles.cancelText}>
          CANCEL
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F5FC',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#333333',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 9,
    height: 52,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 18,
  },

  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 13,
  },

  courseButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#5B2CB6',
    borderRadius: 8,
    padding: 13,
    marginBottom: 8,
  },

  selectedCourse: {
    backgroundColor: '#5B2CB6',
  },

  courseText: {
    textAlign: 'center',
    color: '#5B2CB6',
    fontWeight: 'bold',
  },

  selectedCourseText: {
    color: '#FFFFFF',
  },

  button: {
    backgroundColor: '#5B2CB6',
    height: 55,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  cancelButton: {
    height: 55,
    borderWidth: 1.5,
    borderColor: '#5B2CB6',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  cancelText: {
    color: '#5B2CB6',
    fontWeight: 'bold',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  errorText: {
    fontSize: 18,
    marginBottom: 20,
  },

});