
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function StatisticsScreen({
  navigation,
  menuItems,
}) {

  const totalItems =
    menuItems.length;

  const totalPrice =
    menuItems.reduce(
      (total, item) =>
        total + Number(item.price),
      0
    );

  const averagePrice =
    totalItems > 0
      ? totalPrice / totalItems
      : 0;

  const starters =
    menuItems.filter(
      (item) =>
        item.course === 'Starter'
    ).length;

  const mainCourses =
    menuItems.filter(
      (item) =>
        item.course === 'Main Course'
    ).length;

  const desserts =
    menuItems.filter(
      (item) =>
        item.course === 'Dessert'
    ).length;

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Text style={styles.title}>
        Menu Statistics
      </Text>

      <Text style={styles.subtitle}>
        Overview of your restaurant menu
      </Text>

      <View style={styles.card}>

        <Text style={styles.icon}>
          🍽️
        </Text>

        <Text style={styles.number}>
          {totalItems}
        </Text>

        <Text style={styles.label}>
          Total Menu Items
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.icon}>
          💰
        </Text>

        <Text style={styles.number}>
          R{averagePrice.toFixed(2)}
        </Text>

        <Text style={styles.label}>
          Average Price
        </Text>

      </View>

      <Text style={styles.courseTitle}>
        Items by Course
      </Text>

      <View style={styles.courseRow}>

        <Text style={styles.courseName}>
          Starter
        </Text>

        <Text style={styles.courseNumber}>
          {starters}
        </Text>

      </View>

      <View style={styles.courseRow}>

        <Text style={styles.courseName}>
          Main Course
        </Text>

        <Text style={styles.courseNumber}>
          {mainCourses}
        </Text>

      </View>

      <View style={styles.courseRow}>

        <Text style={styles.courseName}>
          Dessert
        </Text>

        <Text style={styles.courseNumber}>
          {desserts}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Text style={styles.buttonText}>
          BACK TO HOME
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
    color: '#222222',
  },

  subtitle: {
    color: '#666666',
    marginTop: 5,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 25,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 2,
  },

  icon: {
    fontSize: 38,
  },

  number: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B2CB6',
    marginTop: 5,
  },

  label: {
    color: '#555555',
    marginTop: 5,
  },

  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 12,
  },

  courseRow: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  courseName: {
    fontSize: 16,
    fontWeight: '600',
  },

  courseNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5B2CB6',
  },

  button: {
    backgroundColor: '#5B2CB6',
    height: 55,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});