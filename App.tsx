import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import {
  ShoppingCartList,
  DropdownSelection,
  ProductList,
  BooksList,
  PersonList,
  UserList,
} from './app/components';

const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.title}>Generic Class Example</Text>
      <ShoppingCartList />
      <Text style={styles.title}>Generic Interface Example</Text>
      <BooksList />
      <Text style={styles.title}>Generic Constraint Example</Text>
      <PersonList />
      <Text style={styles.title}>Generic Consitional Return Type Example</Text>
      <ProductList />
      <Text style={styles.title}>Generic Component Example</Text>
      <DropdownSelection />
      <Text style={styles.title}>Generic Function Example</Text>
      <UserList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingVertical: '20%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default App;
