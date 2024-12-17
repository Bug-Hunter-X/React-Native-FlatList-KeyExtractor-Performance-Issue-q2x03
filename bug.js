```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
```