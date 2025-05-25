import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre esse App</Text>

      <Text style={styles.subtitle}>Tecnologias Utilizadas:</Text>
      <View style={styles.list}>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/bolha.png')} style={styles.icon} /> }
            <Text style={styles.description}>React Native</Text>
        </View>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/cd.png')} style={styles.icon} /> }
            <Text style={styles.description}>Expo</Text>
        </View>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
            <Text style={styles.description}>Expo Router</Text>
        </View>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/goldfish.webp')} style={styles.icon} /> }
            <Text style={styles.description}>TypeScript</Text>
        </View>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/cd.png')} style={styles.icon} /> }
            <Text style={styles.description}>React Navigation (do Expo Router)</Text>
        </View>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
            <Text style={styles.description}>CSS-in-JS (StyleSheet)</Text>
        </View>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/goldfish.webp')} style={styles.icon} /> }
            <Text style={styles.description}>Links externos</Text>
        </View>
        <View style={styles.topic}>
            { <Image source={require('@/assets/midias/imagens/bolha.png')} style={styles.icon} /> }
            <Text style={styles.description}>Assets de imagens</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    topic: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: '#555',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 2,
  },
  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
    backgroundColor: 'rgba(173, 230, 243, 1)',
  },
  title: {
    fontFamily: 'Conthrax',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30,


    fontWeight: 'bold',
    color: 'rgba(2,23,41,1)',
    textShadowColor: 'rgba(216,115,38,1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  subtitle: {
    fontFamily: 'Conthrax',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,

    color: 'rgba(2,23,41,1)',
    textShadowColor: 'rgba(216,115,38,1)',
    textShadowOffset: { width: 1, height: 1},
    textShadowRadius: 1,
  },
  list: {
    gap: 8,
  },
  item: {
    fontSize: 18,
  },
});
