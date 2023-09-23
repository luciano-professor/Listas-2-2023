import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import { contatos } from '../data/contatos';
import Contato from './Contato';

const Lista2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus contatos</Text>

      {/* Contatos */}
      <FlatList
        data={contatos}
        renderItem={({ item }) => <Contato contato={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Lista2;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },
  titulo: {
    fontSize: 35,
    color: '#D1D5D8',
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
