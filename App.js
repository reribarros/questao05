
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default function App() {

  // Saldo inicial da conta
  const [saldo, setSaldo] = useState(1000);

  // Valor digitado pelo usuário
  const [valor, setValor] = useState('');

  // Mensagem apresentada na tela
  const [mensagem, setMensagem] = useState('');

  // Formatar valores em reais
  function formatarMoeda(numero) {
    return numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  // Função para depositar
  function depositar() {

    const quantia = Number(valor.replace(',', '.'));

    if (
      valor.trim() === '' ||
      !Number.isFinite(quantia) ||
      quantia <= 0
    ) {
      setMensagem('Digite um valor de depósito válido.');
      return;
    }

    setSaldo(atual => atual + quantia);

    setMensagem(
      `Depósito de ${formatarMoeda(quantia)} realizado com sucesso!`
    );

    setValor('');
  }

  // Função para sacar
  function sacar() {

    const quantia = Number(valor.replace(',', '.'));

    if (
      valor.trim() === '' ||
      !Number.isFinite(quantia) ||
      quantia <= 0
    ) {
      setMensagem('Digite um valor de saque válido.');
      return;
    }

    if (quantia > saldo) {
      setMensagem('Saldo insuficiente para realizar o saque.');
      return;
    }

    setSaldo(atual => atual - quantia);

    setMensagem(
      `Saque de ${formatarMoeda(quantia)} realizado com sucesso!`
    );

    setValor('');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Simulador Bancário
      </Text>

      {/* Cartão que apresenta o saldo */}

      <View style={styles.card}>

        <Text style={styles.texto}>
          Saldo disponível
        </Text>

        <Text style={styles.saldo}>
          {formatarMoeda(saldo)}
        </Text>

      </View>

      <Text style={styles.label}>
        Digite o valor da operação:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemplo: 200"
        keyboardType="decimal-pad"
        value={valor}
        onChangeText={setValor}
      />

      <View style={styles.botao}>

        <Button
          title="Depositar"
          onPress={depositar}
          color="#27864A"
        />

      </View>

      <View style={styles.botao}>

        <Button
          title="Sacar"
          onPress={sacar}
          color="#C0392B"
        />

      </View>

      {mensagem !== '' && (

        <Text style={styles.mensagem}>
          {mensagem}
        </Text>

      )}

      <Text style={styles.aviso}>
        Aplicativo demonstrativo.
        Não movimenta dinheiro real.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F4F6F7',
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#273746',
  },

  card: {
    backgroundColor: '#D5F5E3',
    padding: 25,
    borderRadius: 12,
    marginBottom: 30,
    alignItems: 'center',
  },

  texto: {
    fontSize: 18,
    color: '#333',
  },

  saldo: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#196F3D',
    marginTop: 12,
  },

  label: {
    fontSize: 16,
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 18,
    fontSize: 17,
  },

  botao: {
    marginBottom: 12,
  },

  mensagem: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#21618C',
  },

  aviso: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
  },

});
