import { View, Text, Image, Linking, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function HomeScreen() {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título Principal */}
      <Text style={styles.mainTitle}>MLRLIMA</Text>

      {/* Sobre Mim */}
      <Text style={styles.sectionTitle}>SOBRE MIM</Text>

      <View style={styles.imageSection}>
        <Image source={require('@/assets/midias/imagens/eu.jpeg')} style={styles.image} />
        <Text style={styles.imageDescription}>Me chamo Maria Luiza Lima. Atualmente estudo Ciência da Computação na UNICAP.</Text>

        <Image source={require('@/assets/midias/imagens/as2meninasmaismais.webp')} style={styles.image} />
        <Text style={styles.imageDescription}>Participo de eventos de Maratona de Programação desde 2023.</Text>

        <Image source={require('@/assets/midias/imagens/lotr.png')} style={styles.image} />
        <Text style={styles.imageDescription}>O que mais gosto de fazer é ler e assistir filmes.</Text>
      </View>

      {/* Contate-me */}
      <Text style={styles.sectionTitle}>CONTATE-ME</Text>

      <View style={styles.contactSection}>
        <View style={styles.linkRow}>
          <Image source={require('@/assets/midias/imagens/goldfish.webp')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('mailto:mlrlima04@gmail.com')}>
            <Text style={styles.linkText}>Email: mlrlima04@gmail.com</Text>
          </Pressable>
        </View>

        <View style={styles.linkRow}>
          <Image source={require('@/assets/midias/imagens/cd.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://github.com/mlrlima')}>
            <Text style={styles.linkText}>Github</Text>
          </Pressable>
        </View>

        <View style={styles.linkRow}>
          <Image source={require('@/assets/midias/imagens/old_phone.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/maria-luiza-lima-457607276')}>
            <Text style={styles.linkText}>LinkedIn</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
    gap: 20,
    backgroundColor: 'rgba(173, 230, 243, 1)',
  },
  mainTitle: {
    fontFamily: 'Conthrax',
    fontSize: 36,
    textAlign: 'center',


    fontWeight: 'bold',
    color: 'rgba(2,23,41,1)',
    textShadowColor: 'rgba(216,115,38,1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  sectionTitle: {
    fontFamily: 'Conthrax',
    fontSize: 28,
    marginTop: 20,

    fontWeight: 'bold',
    color: 'rgba(2,23,41,1)',
    textShadowColor: 'rgba(216,115,38,1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  imageSection: {
    gap: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  imageDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  contactSection: {
    gap: 16,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  linkText:{
    flex: 1,
    fontSize: 16,
    color: '#007aff',
    textDecorationLine: 'underline',
  },
});
