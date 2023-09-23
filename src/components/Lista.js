import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

import { contatos } from '../data/contatos';
import Contato from './Contato';

const Lista = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus contatos</Text>

      {/* Contatos */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {contatos.map((item) => (
          <Contato key={item.id} contato={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Lista;

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
