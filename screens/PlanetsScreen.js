/* PlanetsScreen.js: Fetch planets info from https://www.swapi.tech/api/planets for PlanetsScreen of Star Wars app*/
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function PlanetsScreen() {
  const [data, setData] = useState([]);

  // Fetch data
  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets')
      .then((resp) => resp.json())
      .then((json) => {
        setData(json.results);
      });
  }, []);

  // Render list of Star Wars planets
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa',
  },
  text: { 
    fontSize: 24, 
    fontWeight: 'bold', 
  },
  item: {
    margin: 5,
    padding: 5,
    fontSize: 18,
  },
});