// Generic Conditional Return Types Example
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ProductListStyles';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const items: Item[] = [
  { id: 1, name: 'Apple', quantity: 5 },
  { id: 2, name: 'Orange', quantity: 10 },
  { id: 3, name: 'Banana', quantity: 3 },
];

const findItemByName = <T extends Item | undefined>(name: string): T => {
  const foundItem = items?.find((item) => item?.name === name);
  return foundItem as T;
};

const ProductList: React.FC = () => {
  const appleItem: Item = findItemByName<Item>('Apple');
  const nonExistentItem: Item = findItemByName<Item>('Grapes');

  return (
    <View style={styles.container}>
      {appleItem ? (
        <Text
          style={styles.text}
        >{`Found item: ${appleItem.name}, quantity: ${appleItem.quantity}`}</Text>
      ) : (
        <Text>Item not found</Text>
      )}
      {nonExistentItem ? (
        <Text
          style={styles.text}
        >{`Found item: ${nonExistentItem.name}, quantity: ${nonExistentItem.quantity}`}</Text>
      ) : (
        <Text style={styles.text}>Item not found</Text>
      )}
    </View>
  );
};

export default ProductList;
