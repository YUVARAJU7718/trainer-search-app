import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function AboutMe() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image 
          source={{ uri: "https://i.pravatar.cc/200?img=12" }} 
          style={styles.avatar}
        />

        {/* PROFILE NAME */}
        <Text style={styles.profileName}>⚡ YUVARAJU ⚡</Text>

        <Text style={styles.title}>About Me</Text>

        <Text style={styles.info}>
          👋 Hi, I'm <Text style={styles.highlight}>YUVARAJU K B</Text>
        </Text>
        <Text style={styles.info}>
          🎉 AND I'm <Text style={styles.highlight}>19 YEARS OLD</Text>
        </Text>
        <Text style={styles.info}>
          🛠️ A passionate <Text style={styles.highlight}>Engineer</Text>
        </Text>
        <Text style={styles.info}>
          🚀 Building REAL WORLD PROJECT <Text style={styles.highlight}>AND</Text> every day
        </Text>
        <Text style={styles.info}>
          💼 And working as a <Text style={styles.highlight}>Freelancer</Text>
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#ce808eff',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(12, 227, 227, 0.21)',
    shadowColor: 'rgba(249, 181, 242, 1)',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#0ff',
  },
  profileName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0ff',
    marginBottom: 12,
    textShadowColor: '#0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0ff',
    marginBottom: 15,
  },
  info: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 8,
    textAlign: 'center',
  },
  highlight: {
    color: '#0ff',
    fontWeight: 'bold',
  },
});
