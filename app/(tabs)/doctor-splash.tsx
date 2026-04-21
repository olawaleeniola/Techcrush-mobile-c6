import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DoctorSplash() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Blue/Purple background top section */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-female-doctor-portrait-in-white-png-image_15971053.png' }}
          style={styles.doctorImage}
        />
      </View>

      {/* White bottom card */}
      <View style={styles.bottomCard}>

        {/* Dots indicator */}
        <View style={styles.dotsRow}>
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
        </View>

        {/* Title */}
        <Text style={styles.title}>
          More Comfortable Chat {'\n'}With the Doctor
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Book an appointment with doctor. Chat with
          doctor via appointment letter and get
          consultation.
        </Text>

        {/* Get Started button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)/doctor-home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B4EFC',
  },
  topSection: {
    flex: 1.2,
    backgroundColor: '#4B4EFC',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  doctorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottomCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 28,
    alignItems: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  dotInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  dotActive: {
    width: 24,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4B4EFC',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#4B4EFC',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});