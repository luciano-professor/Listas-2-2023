import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Contato = ({ contato }) => {
  return (
    <View style={styles.contato}>
      <Text style={styles.contatoNome}>{contato.nome}</Text>
      <Text style={styles.contatoTelefone}>{contato.telefone}</Text>
      <Text style={styles.contatoEmail}>{contato.email}</Text>
    </View>
  );
};

export default Contato;

const styles = StyleSheet.create({
  contato: {
    backgroundColor: '#D1D5D8',
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
  },
  contatoNome: {
    fontSize: 30,
    color: 'black',
  },
  contatoTelefone: {
    fontSize: 20,
    color: '#374151',
  },
  contatoEmail: {
    fontSize: 16,
    color: '#4F46E5',
  },
});
