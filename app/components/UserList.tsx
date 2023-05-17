// Generic Functions Example
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/UserListStyles';

type Result<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

async function fetchData<T>(url: string): Promise<Result<T>> {
  return fetch(url)
    .then((response) => {
      if (response?.ok) {
        return response.json() as Promise<T>;
      } else {
        throw new Error('Failed to fetch data');
      }
    })
    .then((data) => ({ success: true, data }))
    .catch((error) => ({ success: false, error: error?.message }));
}

interface User {
  id: number;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const [userData, setUserData] = useState<User | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await fetchData<User>('https://dummyjson.com/users/1');
      if (result?.success) {
        setUserData(result?.data);
        setError(undefined);
      } else {
        setError(result?.error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <Text style={styles.text}>User ID: {userData?.id}</Text>
          <Text style={styles.text}>Name: {userData?.username}</Text>
          <Text style={styles.text}>Email: {userData?.email}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading user data...</Text>
      )}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
    </View>
  );
};

export default UserList;
