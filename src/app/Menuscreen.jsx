import React, { useMemo, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';

const courses = [
  'All',
  'Starter',
  'Main Course',
  'Dessert',
];

export default function MenuScreen({
  navigation,
  menuItems,
  setMenuItems,
}) {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredItems = useMemo(() => {

    return menuItems.filter((item) => {

      const matchesSearch =
        item.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === 'All' ||
        item.course === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  }, [menuItems, search, filter]);

  const deleteItem = (id) => {

    const item = menuItems.find(
      (menuItem) => menuItem.id === id
    );

    Alert.alert(
      'Delete Menu Item',
      `Are you sure you want to delete ${item.name}?`,

      [
        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Delete',
          style: 'destructive',

          onPress: () => {

            setMenuItems(
              menuItems.filter(
                (menuItem) =>
                  menuItem.id !== id
              )
            );

            Alert.alert(
              'Deleted',
              'Menu item deleted successfully.'
            );
          },
        },
      ]
    );
  };

  const clearSearch = () => {
    setSearch('');
    setFilter('All');
  };

  const renderItem = ({ item }) => (

    <View style={styles.card}>

      <View style={styles.topRow}>

        <Text style={styles.dishName}>
          {item.name}
        </Text>

        <Text style={styles.price}>
          R{item.price.toFixed(2)}
        </Text>

      </View>

      <Text style={styles.description}>
        {item.description}
      </Text>

      <Text style={styles.course}>
        {item.course}
      </Text>

      <View style={styles.actions}>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate(
              'Edit Menu Item',
              { itemId: item.id }
            )
          }
        >
          <Text style={styles.actionText}>
            EDIT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteItem(item.id)}
        >
          <Text style={styles.actionText}>
            DELETE
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );

  return (

    <View style={styles.container}>

      <TextInput
        style={styles.search}
        placeholder="Search by dish name..."
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.filterTitle}>
        Filter by Course
      </Text>

      <View style={styles.filterContainer}>

        {courses.map((item) => (

          <TouchableOpacity
            key={item}
            style={[
              styles.filterButton,

              filter === item &&
              styles.activeFilter,
            ]}
            onPress={() => setFilter(item)}
          >

            <Text
              style={[
                styles.filterText,

                filter === item &&
                styles.activeFilterText,
              ]}
            >
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <TouchableOpacity
        onPress={clearSearch}
      >
        <Text style={styles.clearText}>
          Clear Search & Filter
        </Text>
      </TouchableOpacity>

      {filteredItems.length === 0 ? (

        <View style={styles.empty}>

          <Text style={styles.emptyIcon}>
            🍽️
          </Text>

          <Text style={styles.emptyTitle}>
            No menu items found
          </Text>

          <Text style={styles.emptyText}>
            Add a menu item or change your search.
          </Text>

        </View>

      ) : (

        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />

      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('Add Menu Item')
        }
      >
        <Text style={styles.addButtonText}>
          + ADD NEW ITEM
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F5FC',
    padding: 15,
  },

  search: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 12,
  },

  filterTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },

  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },

  filterButton: {
    borderWidth: 1,
    borderColor: '#5B2CB6',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 6,
    marginBottom: 6,
    backgroundColor: '#FFFFFF',
  },

  activeFilter: {
    backgroundColor: '#5B2CB6',
  },

  filterText: {
    color: '#5B2CB6',
    fontWeight: 'bold',
    fontSize: 12,
  },

  activeFilterText: {
    color: '#FFFFFF',
  },

  clearText: {
    color: '#5B2CB6',
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 8,
  },

  list: {
    paddingBottom: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 2,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dishName: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#5B2CB6',
  },

  price: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  description: {
    color: '#555555',
    marginTop: 8,
    lineHeight: 20,
  },

  course: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEE7FF',
    color: '#5B2CB6',
    fontWeight: 'bold',
    padding: 6,
    borderRadius: 12,
    marginTop: 10,
  },

  actions: {
    flexDirection: 'row',
    marginTop: 15,
  },

  editButton: {
    flex: 1,
    backgroundColor: '#5B2CB6',
    padding: 11,
    borderRadius: 7,
    alignItems: 'center',
    marginRight: 5,
  },

  deleteButton: {
    flex: 1,
    backgroundColor: '#D32F2F',
    padding: 11,
    borderRadius: 7,
    alignItems: 'center',
    marginLeft: 5,
  },

  actionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 50,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  emptyText: {
    color: '#666666',
    marginTop: 8,
  },

  addButton: {
    backgroundColor: '#5B2CB6',
    height: 52,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});