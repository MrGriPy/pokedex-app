import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const mockUser = {
  username: 'PikachuFan',
  profilePicture: null,
  capturedCount: 42,
};

export default function ProfileScreen() {
  const { username, profilePicture, capturedCount } = mockUser;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>

      <View style={styles.profileCard}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{username[0]}</Text>
          </View>
        )}

        <Text style={styles.username}>{username}</Text>
        <Text style={styles.captured}>
          Pokémon capturés : {capturedCount}
        </Text>

        <Link href="/" style={styles.logoutButton}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F08030', // Orange Feu Pokédex
    marginVertical: 20,
  },
  profileCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#438CA7', // Bleu pétrole
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38342E', // Marron foncé
    marginBottom: 10,
  },
  captured: {
    fontSize: 16,
    color: '#2A9D8F', // Vert eau pour le chiffre
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#F08030',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
