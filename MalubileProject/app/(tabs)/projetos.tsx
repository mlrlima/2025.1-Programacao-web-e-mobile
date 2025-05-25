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

export default function Projetos(): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Portfólio</Text>

      //jogo da senha
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Jogo da Senha</Text>
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
                  Jogo desenvolvido para a disciplina Programação Web e Mobile, 2025.1
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>HTML, CSS, JS</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} /> }
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://20251-programacao-web-e-mobile.vercel.app/jogo_senha/index.html')
                  }
                >
                  Link para o jogo
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} /> }
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://github.com/mlrlima/2025.1-Programacao-web-e-mobile/tree/main/jogo_senha'
                    )
                  }
                >
                  Link para o repositório Github
                </Text>
              </View>
            </View>

            { <Image
              source={require('@/assets/midias/imagens/img_jogo_da_senha.png')}
              style={styles.projectImage}
            /> }
          </View>



        )}
      </View>

        //Projetos da disciplina Web e Mobile
        <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Projetos da disciplina Web e Mobile</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/bolha.png')} style={styles.icon} /> }
                <Text style={styles.description}>
                  Projetos desenvolvidos para a disciplina Programação Web e Mobile, 2025.1
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>HTML, CSS, JS</Text>
              </View>

              <View style={styles.topic}>
                {<Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} />}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://20251-programacao-web-e-mobile.vercel.app/')
                  }
                >
                  Link para o site publicado
                </Text>
              </View>

              <View style={styles.topic}>
                {<Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} />}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://github.com/mlrlima/2025.1-Programacao-web-e-mobile/tree/main'
                    )
                  }
                >
                  Link para o repositório Github
                </Text>
              </View>
            </View>

            { <Image
              source={require('@/assets/midias/imagens/img_codigo_default.png')}
              style={styles.projectImage}
            /> }
          </View>
        )}
      </View>

      //Labyrinth of Leaves
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Labyrinth of Leaves</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/bolha.png')} style={styles.icon} /> }
                <Text style={styles.description}>
                  Jogo desenvolvido para a disciplina Programação Orientada a Objetos, 2024.1
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>Java</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} /> }
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://github.com/Roberto20deluxe/Labirinto_OOP_2024.1')
                  }
                >
                  Link para o repositório Github
                </Text>
              </View>
            </View>

            { <Image
              source={require('@/assets/midias/imagens/img_labirinto.gif')}
              style={styles.projectImage}
            /> }
          </View>



        )}
      </View>

      //Flavourit
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Flavourit</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/bolha.png')} style={styles.icon} /> }
                <Text style={styles.description}>
                  Projeto desenvolvido para a disciplina de Análise e Projeto De Software, 2024.2
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>Django, Python, HTML, CSS, JS</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} />}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://github.com/mlrlima/2025.1-Programacao-web-e-mobile/tree/main/jogo_senha'
                    )
                  }
                >
                  Link para o repositório Github
                </Text>
              </View>
            </View>

            { <Image
              source={require('@/assets/midias/imagens/img_flavourit.gif')}
              style={styles.projectImage}
            /> }
          </View>



        )}
      </View>

      //Portal de Projetos de Extensão
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Portal de Projetos de Extensão</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/bolha.png')} style={styles.icon} /> }
                <Text style={styles.description}>
                  Site em desenvolvimento para a disciplina Projeto Integrador, 2025.1
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>HTML, CSS, JS</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} /> }
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://github.com/VictorHugoJSS/portalDeExtensaoUnicap'
                    )
                  }
                >
                  Link para o repositório Github
                </Text>
              </View>
            </View>

            { <Image
              source={require('@/assets/midias/imagens/img_codigo_default.png')}
              style={styles.projectImage}
            /> }
          </View>



        )}
      </View>

      //Resolução de questões de programação
      <View style={styles.projectContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.projectName}>Resolução de questões de programação</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.projectDetails}>
            <View style={styles.infoSection}>
              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/bolha.png')} style={styles.icon} /> }
                <Text style={styles.description}>
                  Resolução de questões de programação de Juízes Online
                </Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/folha.png')} style={styles.icon} /> }
                <Text style={styles.description}>C++, C, SQL</Text>
              </View>

              <View style={styles.topic}>
                { <Image source={require('@/assets/midias/imagens/pixel_cursor.png')} style={styles.icon} /> }
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://github.com/mlrlima/programmingSolutions'
                    )
                  }
                >
                  Link para o repositório Github
                </Text>
              </View>
            </View>

            { <Image
              source={require('@/assets/midias/imagens/img_codigo_default.png')}
              style={styles.projectImage}
            /> }
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
