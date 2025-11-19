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
        <Text style={styles.profileName}>⚡ Yuvaraj ⚡</Text>

        <Text style={styles.title}>About Me</Text>

        <Text style={styles.info}>
          👋 Hi, I'm <Text style={styles.highlight}>Yuvaraj</Text>
        </Text>
        <Text style={styles.info}>
          🎉 I'm <Text style={styles.highlight}>19 years old</Text>
        </Text>
        <Text style={styles.info}>
          🛠️ A passionate <Text style={styles.highlight}>Engineer</Text>
        </Text>
        <Text style={styles.info}>
          🚀 Building <Text style={styles.highlight}>real-world projects</Text> every day
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
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#1a1a1a',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0ff',
    shadowColor: '#0ff',
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
