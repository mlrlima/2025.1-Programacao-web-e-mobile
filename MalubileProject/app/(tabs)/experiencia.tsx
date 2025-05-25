import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

export default function Experiencia(): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência</Text>

      //ensino medio
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Ensino Médio</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                <Image
                  source={require('@/assets/midias/imagens/bolha.png')}
                  style={styles.icon}
                />
                <Text style={styles.description}>
                  Colégio Salesiano Sagrado Coração
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>Recife - PE</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/goldfish.webp')} style={styles.icon} /> }
                <Text style={styles.description}>Turma de 2022</Text>
              </View>
              
            </View>
          </View>



        )}
      </View>

      //graduacao
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Bacharelado em Ciência da Computação</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                <Image
                  source={require('@/assets/midias/imagens/bolha.png')}
                  style={styles.icon}
                />
                <Text style={styles.description}>
                  Universidade Católica de Pernambuco (UNICAP)
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>Recife - PE</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/goldfish.webp')} style={styles.icon} /> }
                <Text style={styles.description}>Atualmente no 5 período (2025.1)</Text>
              </View>
              
            </View>
          </View>

        )}
      </View>

      //maratona
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Maratona de Programação</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                <Image
                  source={require('@/assets/midias/imagens/bolha.png')}
                  style={styles.icon}
                />
                <Text style={styles.description}>
                  Projeto da extenção da UNICAP; Maratona de Programação da SBC; Maratona Feminina de Computação (MFP)
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>Olinda - PE; João Pessoa -  PB; Campinas - SP</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/goldfish.webp')} style={styles.icon} /> }
                <Text style={styles.description}>2023 - 2025</Text>
              </View>
              
            </View>
          </View>



        )}
      </View>

      //icpc summerschool
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Brazilian ICPC Summer School</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                <Image
                  source={require('@/assets/midias/imagens/bolha.png')}
                  style={styles.icon}
                />
                <Text style={styles.description}>
                  Universidade Estadual de Campinas (UNICAMP)
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>Campinas - SP</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/goldfish.webp')} style={styles.icon} /> }
                <Text style={styles.description}>2025</Text>
              </View>
              
            </View>
          </View>



        )}
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
    backgroundColor: 'rgba(173, 230, 243, 1)',
  },
  title: {
    fontFamily: 'Conthrax',
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',

    fontWeight: 'bold',
    color: 'rgba(2,23,41,1)',
    textShadowColor: 'rgba(216,115,38,1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  projectContainer: {
    marginBottom: 20,
  },
  projectName: {
    fontFamily: 'Conthrax',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,

    color: 'rgba(2,23,41,1)',
    textShadowColor: 'rgba(216,115,38,1)',
    textShadowOffset: { width: 1, height: 1},
    textShadowRadius: 1,
  },
  projectDetails: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  infoSection: {
    marginBottom: 15,
  },
  topic: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 2,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: '#555',
  },
  link: {
    flex: 1,
    fontSize: 16,
    color: '#007aff',
    textDecorationLine: 'underline',
  },
  projectImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
