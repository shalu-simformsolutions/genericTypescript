// Generic Constraint Example
import React, { type FC } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/PersonListStyles';

interface Person {
  id: number;
  name: string;
  age: number;
}

interface Props<T extends Person> {
  item: T;
}

const PersonComponent = <T extends Person>({ item }: Props<T>): JSX.Element => {
  return (
    <View>
      <Text style={{ fontSize: 18 }}>Name: {item.name}</Text>
      <Text style={{ fontSize: 18 }}>Age: {item.age}</Text>
    </View>
  );
};

const PersonList: FC = () => {
  const person1: Person = { id: 1, name: 'John', age: 25 };
  const person2: Person = { id: 2, name: 'Jane', age: 30 };

  return (
    <View style={styles.container}>
      {/* Valid: person1 is of type Person */}
      <PersonComponent<Person> item={person1} />
      {/* Valid: person2 is of type Person */}
      <PersonComponent<Person> item={person2} />
      {/* <PersonComponent item={{ id: 3, title: 'Invalid' }} /> */}
      {/* Invalid: Property 'age' is missing */}
    </View>
  );
};

export default PersonList;
