import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

export default function Contact() {

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>📞 Contact Yuvaraj</Text>

      {/* Instagram */}
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => openLink("https://instagram.com")}
      >
        <Text style={styles.platform}>Instagram</Text>
        <Text style={styles.username}>@yuvaraj_dev</Text>
      </TouchableOpacity>

      {/* GitHub */}
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => openLink("https://github.com")}
      >
        <Text style={styles.platform}>GitHub</Text>
        <Text style={styles.username}>github.com/Yuvaraj</Text>
      </TouchableOpacity>

      {/* LinkedIn */}
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => openLink("https://linkedin.com")}
      >
        <Text style={styles.platform}>LinkedIn</Text>
        <Text style={styles.username}>Yuvaraj | Engineer</Text>
      </TouchableOpacity>

      {/* Email */}
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => openLink("mailto:yuvaraj@example.com")}
      >
        <Text style={styles.platform}>Email</Text>
        <Text style={styles.username}>yuvaraj@example.com</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#0a0a0a',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0ff',
    textAlign: 'center',
    marginBottom: 25,
    textShadowColor: '#0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0ff',
    marginBottom: 18,
  },
  platform: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0ff',
  },
  username: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 3,
  },
});
