import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

export default function Projects() {

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 My Projects</Text>

      {/* Project 1 */}
      <TouchableOpacity
        style={styles.projectCard}
        onPress={() => openLink("https://github.com")}
      >
        <Text style={styles.projectName}>Yuvaraj Portfolio Website</Text>
        <Text style={styles.link}>https://github.com</Text>
      </TouchableOpacity>

      {/* Project 2 */}
      <TouchableOpacity
        style={styles.projectCard}
        onPress={() => openLink("https://vercel.com")}
      >
        <Text style={styles.projectName}>Yuvaraj Mobile App UI</Text>
        <Text style={styles.link}>https://vercel.com</Text>
      </TouchableOpacity>

      {/* Project 3 */}
      <TouchableOpacity
        style={styles.projectCard}
        onPress={() => openLink("https://dribbble.com")}
      >
        <Text style={styles.projectName}>Yuvaraj Game Dashboard</Text>
        <Text style={styles.link}>https://dribbble.com</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0a0a0a',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0ff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  projectCard: {
    backgroundColor: '#1a1a1a',
    padding: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0ff',
    marginBottom: 15,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0ff',
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: '#ccc',
  },
});
