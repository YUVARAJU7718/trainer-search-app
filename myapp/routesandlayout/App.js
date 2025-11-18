import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: "https://wallpaperaccess.com/full/266770.jpg" }} 
      style={styles.bg}
      blurRadius={1}
    >
      <View style={styles.container}>
      
        <View style={styles.card}>
          <Image 
            source={{ uri: "https://i.pravatar.cc/300" }} 
            style={styles.avatar} 
          />

          <Text style={styles.gamerName}>⚡ Yuvaraj ⚡</Text>
          <Text style={styles.role}>Pro Gamer | Mobile Dev</Text>
          <Text style={styles.bio}>
            Grinding games, building apps, and leveling up every day.
          </Text>

        </View>

      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(150, 172, 179, 0.6)',
    width: '90%',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0ff',
    shadowColor: '#0ff',
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 15,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#0ff',
  },
  gamerName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0ff',
    textShadowColor: '#0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  role: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#ddd',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  }
});

