import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('⚠️ Veuillez remplir tous les champs.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('✅ Connexion réussie ! Bienvenue dans le Pokédex.');
    console.log('Connexion réussie pour', username);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <Text style={styles.subtitle}>Connecte-toi pour continuer</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nom d’utilisateur</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre nom d’utilisateur"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre mot de passe"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* 🔑 Lien vers la page d'inscription */}
      <Link href="/signup" style={styles.signupButton}>
        <Text style={styles.signupText}>S’inscrire au Pokédex</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f03030ff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  field: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#38342E',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#438CA7',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  error: {
    color: '#E63946',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  success: {
    color: '#2A9D8F',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#78C850',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    borderWidth: 2,
    borderColor: '#438CA7',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    fontSize: 16,
    color: '#438CA7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
