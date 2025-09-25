import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

type Pokemon = {
  id: number;
  name: string;
  types: string[];
  // image: any; // image commentée pour le moment
};

const POKEMONS: Pokemon[] = [
  { id: 1, name: 'Bulbizarre', types: ['Plante', 'Poison'] },
  { id: 2, name: 'Herbizarre', types: ['Plante', 'Poison'] },
  { id: 3, name: 'Florizarre', types: ['Plante', 'Poison'] },
  { id: 4, name: 'Salamèche', types: ['Feu'] },
  { id: 5, name: 'Reptincel', types: ['Feu'] },
  { id: 6, name: 'Dracaufeu', types: ['Feu', 'Vol'] },
  { id: 7, name: 'Carapuce', types: ['Eau'] },
  { id: 8, name: 'Carabaffe', types: ['Eau'] },
  { id: 9, name: 'Tortank', types: ['Eau'] },
  { id: 10, name: 'Chenipan', types: ['Insecte'] },
  { id: 11, name: 'Chrysacier', types: ['Insecte'] },
  { id: 12, name: 'Papilusion', types: ['Insecte', 'Vol'] },
  { id: 13, name: 'Aspicot', types: ['Insecte', 'Poison'] },
  { id: 14, name: 'Coconfort', types: ['Insecte', 'Poison'] },
  { id: 15, name: 'Dardargnan', types: ['Insecte', 'Poison'] },
  { id: 16, name: 'Roucool', types: ['Normal', 'Vol'] },
  { id: 17, name: 'Roucoups', types: ['Normal', 'Vol'] },
  { id: 18, name: 'Roucarnage', types: ['Normal', 'Vol'] },
  { id: 19, name: 'Rattata', types: ['Normal'] },
  { id: 20, name: 'Rattatac', types: ['Normal'] },
  { id: 21, name: 'Piafabec', types: ['Normal', 'Vol'] },
  { id: 22, name: 'Rapasdepic', types: ['Normal', 'Vol'] },
  { id: 23, name: 'Abo', types: ['Poison'] },
  { id: 24, name: 'Arbok', types: ['Poison'] },
  { id: 25, name: 'Pikachu', types: ['Électrik'] },
  { id: 26, name: 'Raichu', types: ['Électrik'] },
  { id: 27, name: 'Sabelette', types: ['Sol'] },
  { id: 28, name: 'Sablaireau', types: ['Sol'] },
  { id: 29, name: 'Nidoran♀', types: ['Poison'] },
  { id: 30, name: 'Nidorina', types: ['Poison'] },
  { id: 31, name: 'Nidoqueen', types: ['Poison', 'Sol'] },
  { id: 32, name: 'Nidoran♂', types: ['Poison'] },
  { id: 33, name: 'Nidorino', types: ['Poison'] },
  { id: 34, name: 'Nidoking', types: ['Poison', 'Sol'] },
  { id: 35, name: 'Mélofée', types: ['Fée'] },
  { id: 36, name: 'Mélodelfe', types: ['Fée'] },
  { id: 37, name: 'Goupix', types: ['Feu'] },
  { id: 38, name: 'Feunard', types: ['Feu'] },
  { id: 39, name: 'Rondoudou', types: ['Normal', 'Fée'] },
  { id: 40, name: 'Grodoudou', types: ['Normal', 'Fée'] },
  { id: 41, name: 'Nosferapti', types: ['Poison', 'Vol'] },
  { id: 42, name: 'Nosferalto', types: ['Poison', 'Vol'] },
  { id: 43, name: 'Mystherbe', types: ['Plante', 'Poison'] },
  { id: 44, name: 'Ortide', types: ['Plante', 'Poison'] },
  { id: 45, name: 'Rafflesia', types: ['Plante', 'Poison'] },
  { id: 46, name: 'Paras', types: ['Insecte', 'Plante'] },
  { id: 47, name: 'Parasect', types: ['Insecte', 'Plante'] },
  { id: 48, name: 'Mimitoss', types: ['Insecte', 'Poison'] },
  { id: 49, name: 'Aéromite', types: ['Insecte', 'Poison'] },
  { id: 50, name: 'Taupiqueur', types: ['Sol'] },
  { id: 51, name: 'Triopikeur', types: ['Sol'] },
  { id: 52, name: 'Miaouss', types: ['Normal'] },
  { id: 53, name: 'Persian', types: ['Normal'] },
  { id: 54, name: 'Psykokwak', types: ['Eau'] },
  { id: 55, name: 'Akwakwak', types: ['Eau'] },
  { id: 56, name: 'Férosinge', types: ['Combat'] },
  { id: 57, name: 'Colossinge', types: ['Combat'] },
  { id: 58, name: 'Caninos', types: ['Feu'] },
  { id: 59, name: 'Arcanin', types: ['Feu'] },
  { id: 60, name: 'Ptitard', types: ['Eau'] },
  { id: 61, name: 'Têtarte', types: ['Eau'] },
  { id: 62, name: 'Tartard', types: ['Eau', 'Combat'] },
  { id: 63, name: 'Abra', types: ['Psy'] },
  { id: 64, name: 'Kadabra', types: ['Psy'] },
  { id: 65, name: 'Alakazam', types: ['Psy'] },
  { id: 66, name: 'Machoc', types: ['Combat'] },
  { id: 67, name: 'Machopeur', types: ['Combat'] },
  { id: 68, name: 'Mackogneur', types: ['Combat'] },
  { id: 69, name: 'Chétiflor', types: ['Plante', 'Poison'] },
  { id: 70, name: 'Boustiflor', types: ['Plante', 'Poison'] },
  { id: 71, name: 'Empiflor', types: ['Plante', 'Poison'] },
  { id: 72, name: 'Tentacool', types: ['Eau', 'Poison'] },
  { id: 73, name: 'Tentacruel', types: ['Eau', 'Poison'] },
  { id: 74, name: 'Racaillou', types: ['Roche', 'Sol'] },
  { id: 75, name: 'Gravalanch', types: ['Roche', 'Sol'] },
  { id: 76, name: 'Grolem', types: ['Roche', 'Sol'] },
  { id: 77, name: 'Ponyta', types: ['Feu'] },
  { id: 78, name: 'Galopa', types: ['Feu'] },
  { id: 79, name: 'Ramoloss', types: ['Eau', 'Psy'] },
  { id: 80, name: 'Flagadoss', types: ['Eau', 'Psy'] },
  { id: 81, name: 'Magnéti', types: ['Électrik', 'Acier'] },
  { id: 82, name: 'Magnéton', types: ['Électrik', 'Acier'] },
  { id: 83, name: 'Canarticho', types: ['Normal', 'Vol'] },
  { id: 84, name: 'Doduo', types: ['Normal', 'Vol'] },
  { id: 85, name: 'Dodrio', types: ['Normal', 'Vol'] },
  { id: 86, name: 'Otaria', types: ['Eau'] },
  { id: 87, name: 'Lamantine', types: ['Eau', 'Glace'] },
  { id: 88, name: 'Tadmorv', types: ['Poison'] },
  { id: 89, name: 'Grotadmorv', types: ['Poison'] },
  { id: 90, name: 'Kokiyas', types: ['Eau'] },
  { id: 91, name: 'Crustabri', types: ['Eau', 'Glace'] },
  { id: 92, name: 'Fantominus', types: ['Spectre', 'Poison'] },
  { id: 93, name: 'Spectrum', types: ['Spectre', 'Poison'] },
  { id: 94, name: 'Ectoplasma', types: ['Spectre', 'Poison'] },
  { id: 95, name: 'Onix', types: ['Roche', 'Sol'] },
  { id: 96, name: 'Soporifik', types: ['Psy'] },
  { id: 97, name: 'Hypnomade', types: ['Psy'] },
  { id: 98, name: 'Krabby', types: ['Eau'] },
  { id: 99, name: 'Krabboss', types: ['Eau'] },
  { id: 100, name: 'Voltorbe', types: ['Électrik'] },
  { id: 101, name: 'Électrode', types: ['Électrik'] },
  { id: 102, name: 'Noeunoeuf', types: ['Plante', 'Psy'] },
  { id: 103, name: 'Noadkoko', types: ['Plante', 'Psy'] },
  { id: 104, name: 'Osselait', types: ['Sol'] },
  { id: 105, name: 'Ossatueur', types: ['Sol'] },
  { id: 106, name: 'Kicklee', types: ['Combat'] },
  { id: 107, name: 'Tygnon', types: ['Combat'] },
  { id: 108, name: 'Excelangue', types: ['Normal'] },
  { id: 109, name: 'Smogo', types: ['Poison'] },
  { id: 110, name: 'Smogogo', types: ['Poison'] },
  { id: 111, name: 'Rhinocorne', types: ['Sol', 'Roche'] },
  { id: 112, name: 'Rhinoféros', types: ['Sol', 'Roche'] },
  { id: 113, name: 'Leveinard', types: ['Normal'] },
  { id: 114, name: 'Saquedeneu', types: ['Plante'] },
  { id: 115, name: 'Kangourex', types: ['Normal'] },
  { id: 116, name: 'Hypotrempe', types: ['Eau'] },
  { id: 117, name: 'Hypocéan', types: ['Eau'] },
  { id: 118, name: 'Poissirène', types: ['Eau'] },
  { id: 119, name: 'Poissoroy', types: ['Eau'] },
  { id: 120, name: 'Stari', types: ['Eau'] },
  { id: 121, name: 'Staross', types: ['Eau', 'Psy'] },
  { id: 122, name: 'M. Mime', types: ['Psy'] },
  { id: 123, name: 'Insécateur', types: ['Insecte', 'Vol'] },
  { id: 124, name: 'Lippoutou', types: ['Glace', 'Psy'] },
  { id: 125, name: 'Élektek', types: ['Électrik'] },
  { id: 126, name: 'Magmar', types: ['Feu'] },
  { id: 127, name: 'Scarabrute', types: ['Insecte'] },
  { id: 128, name: 'Tauros', types: ['Normal'] },
  { id: 129, name: 'Magicarpe', types: ['Eau'] },
  { id: 130, name: 'Léviator', types: ['Eau', 'Vol'] },
  { id: 131, name: 'Lokhlass', types: ['Eau', 'Glace'] },
  { id: 132, name: 'Métamorph', types: ['Normal'] },
  { id: 133, name: 'Évoli', types: ['Normal'] },
  { id: 134, name: 'Aquali', types: ['Eau'] },
  { id: 135, name: 'Voltali', types: ['Électrik'] },
  { id: 136, name: 'Pyroli', types: ['Feu'] },
  { id: 137, name: 'Porygon', types: ['Normal'] },
  { id: 138, name: 'Amonita', types: ['Roche', 'Eau'] },
  { id: 139, name: 'Amonistar', types: ['Roche', 'Eau'] },
  { id: 140, name: 'Kabuto', types: ['Roche', 'Eau'] },
  { id: 141, name: 'Kabutops', types: ['Roche', 'Eau'] },
  { id: 142, name: 'Ptéra', types: ['Roche', 'Vol'] },
  { id: 143, name: 'Ronflex', types: ['Normal'] },
  { id: 144, name: 'Artikodin', types: ['Glace', 'Vol'] },
  { id: 145, name: 'Électhor', types: ['Électrik', 'Vol'] },
  { id: 146, name: 'Sulfura', types: ['Feu', 'Vol'] },
  { id: 147, name: 'Minidraco', types: ['Dragon'] },
  { id: 148, name: 'Draco', types: ['Dragon'] },
  { id: 149, name: 'Dracolosse', types: ['Dragon', 'Vol'] },
  { id: 150, name: 'Mewtwo', types: ['Psy'] },
  { id: 151, name: 'Mew', types: ['Psy'] },
];

const typeColors: Record<string, string> = {
  Plante: '#78C850',
  Poison: '#A040A0',
  Feu: '#F08030',
  Vol: '#A890F0',
  Eau: '#6890F0',
  Insecte: '#A8B820',
  Normal: '#A8A878',
  Électrik: '#F8D030',
  Sol: '#E0C068',
  Fée: '#EE99AC',
  Psy: '#F85888',
  Combat: '#C03028',
  Roche: '#B8A038',
  Spectre: '#705898',
  Glace: '#98D8D8',
  Dragon: '#7038F8',
};



export default function Pokedex() {
  const [search, setSearch] = useState('');
  const [capturedIds, setCapturedIds] = useState<number[]>([]);

  const filteredPokemons = POKEMONS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.types.some(type => type.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleCapture = (id: number, name: string) => {
    if (capturedIds.includes(id)) {
      setCapturedIds(capturedIds.filter(c => c !== id));
      Alert.alert('Annulé', `${name} n'est plus capturé.`);
    } else {
      setCapturedIds([...capturedIds, id]);
      Alert.alert('Félicitations !', `${name} a été capturé !`);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <Text style={styles.title}>Pokédex</Text>

      <TextInput
        style={styles.input}
        placeholder="Rechercher un Pokémon..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.grid}>
        {filteredPokemons.map(pokemon => {
          const captured = capturedIds.includes(pokemon.id);

          return (
            <TouchableOpacity
              key={pokemon.id}
              style={[styles.card, captured && { opacity: 0.6 }]}
              onPress={() => toggleCapture(pokemon.id, pokemon.name)}
            >
              {/*
              <Image source={pokemon.image} style={styles.image} />
              */}
              <Text style={styles.name}>{pokemon.name}</Text>
              <View style={styles.typesContainer}>
                {pokemon.types.map(type => (
                  <View
                    key={type}
                    style={[styles.typeBadge, { backgroundColor: typeColors[type] || '#777' }]}
                  >
                    <Text style={styles.typeText}>{type}</Text>
                  </View>
                ))}
              </View>
              {captured && (
                <View style={styles.capturedBadge}>
                  <Text style={styles.capturedText}>Capturé</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Compteur en bas */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>
          {capturedIds.length} / {POKEMONS.length} Pokémon capturé(s)
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF0000',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  /*
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  */
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    margin: 2,
  },
  typeText: {
    color: '#fff',
    fontSize: 12,
  },
  capturedBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FFD700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  capturedText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  counterContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
