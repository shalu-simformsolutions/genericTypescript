// Generic Class Example
import React, { useState, type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/ShoppingCartListStyles';

// Generic class representing a shopping cart
class ShoppingCart<T> {
  private items: T[] = [];

  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  addItem = (item: T): void => {
    this.items.push(item);
  };

  removeItem = (item: T): void => {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  };

  getItems = (): T[] => {
    return this.items;
  };
}

// React Native component using the ShoppingCart class
const ShoppingCartList: FC = () => {
  const [cart, setCart] = useState<ShoppingCart<string>>(new ShoppingCart<string>());  // initializes the shopping cart with an empty array of type string[].

  const addToCart = (item: string): void => {
    const updatedCart = new ShoppingCart<string>([...cart.getItems()]);
    updatedCart.addItem(item);
    setCart(updatedCart);
  };

  const removeFromCart = (item: string): void => {
    const updatedCart = new ShoppingCart<string>([...cart.getItems()]);
    updatedCart.removeItem(item);
    setCart(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <TouchableOpacity
        onPress={() => addToCart('Item 1')}
        style={styles.addItemButton}
      >
        <Text style={styles.addItemButtonText}>Add Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => removeFromCart('Item 1')}
        style={styles.removeItemButton}
      >
        <Text style={styles.removeItemButtonText}>Remove</Text>
      </TouchableOpacity>
      <Text>Items in Cart: {cart?.getItems().join(', ')}</Text>
    </View>
  );
};

export default ShoppingCartList;
