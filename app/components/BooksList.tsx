//Generic Interface Example
import React, { type FC } from 'react';
import { FlatList, Text, View, type ListRenderItemInfo } from 'react-native';
import styles from './styles/BookListStyles';

// Generic interface for the item
interface BookListItem<T> {
  id: string;
  data: T;
}

// Generic props for the component
interface BookListProps<T> {
  items: BookListItem<T>[];
  renderItem: (item: BookListItem<T>) => React.ReactElement;
}

// Reusable List component
const BookList = <T,>({ items, renderItem }: BookListProps<T>) => (
  <FlatList
    data={items}
    keyExtractor={(item: BookListItem<T>) => item.id}
    renderItem={({ item }: ListRenderItemInfo<BookListItem<T>>) =>
      renderItem(item)
    }
  />
);

// Usage example
// Define a type for the item data
type Book = {
  title: string;
  author: string;
};

// Create an array of books
const booksData: BookListItem<Book>[] = [
  { id: '1', data: { title: 'Book 1', author: 'Author 1' } },
  { id: '2', data: { title: 'Book 2', author: 'Author 2' } },
  { id: '3', data: { title: 'Book 3', author: 'Author 3' } },
];

// Create a component to render a book item
const renderBooksItem = (item: BookListItem<Book>): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.text}>Title: {item.data.title}</Text>
    <Text style={styles.text}>Author: {item.data.author}</Text>
  </View>
);

// Render the List component with books and the book item renderer
const BooksList: FC = () => (
  <BookList<Book> items={booksData} renderItem={renderBooksItem} />
);

export default BooksList;
