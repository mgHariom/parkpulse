import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, FlatList} from 'react-native';
import Checkbox from 'expo-checkbox';


export default function ShoppingCart({ navigation }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, selected: false },
    { id: 2, name: 'Product 2', price: 15, selected: false },
    { id: 3, name: 'Product 3', price: 20, selected: false },
  ]);

  const toggleItemSelection = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeSelectedItems = () => {
    const updatedCartItems = cartItems.filter(item => !item.selected);
    setCartItems(updatedCartItems);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <Checkbox
                value={item.selected}
                onValueChange={() => toggleItemSelection(item.id)}
              />
            </View>
          )}
        />
        <Button title="Remove Selected Items" onPress={removeSelectedItems} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8f0fa',
  },
  scrollView: {
    backgroundColor: '#d8f0fa',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
});
