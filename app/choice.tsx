import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const REGIONS = [
  { name: 'Kanto', description: 'La région classique des 151 premiers Pokémon.' },
  { name: 'Johto', description: 'La région de la seconde génération.' },
  { name: 'Hoenn', description: 'Découvrez de nouvelles formes et types.' },
  { name: 'Sinnoh', description: 'Riche en légendaires et paysages variés.' },
  { name: 'Unys', description: 'Inspirée des États-Unis, pleine de surprises.' },
];

export default function RegionSelection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
    Alert.alert('Région sélectionnée', `Vous avez choisi ${region} !`);
    // Ici tu pourras naviguer vers le Pokédex ou autre
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choisissez votre région</Text>

      <View style={styles.grid}>
        {REGIONS.map((region) => (
          <TouchableOpacity
            key={region.name}
            style={[
              styles.card,
              selectedRegion === region.name && styles.selectedCard,
            ]}
            onPress={() => handleSelectRegion(region.name)}
          >
            <Text style={styles.regionName}>{region.name}</Text>
            <Text style={styles.regionDescription}>{region.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  regionName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#38342E',
  },
  regionDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
