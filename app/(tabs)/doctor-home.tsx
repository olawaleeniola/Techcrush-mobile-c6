import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DoctorHome() {
    
  return (
    <ScrollView style={styles.container}>

      {/* Purple Header */}
      <View style={styles.header}>

        {/* Profile row */}
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={styles.profileImage}
          />
          <View style={styles.welcomeText}>
            <Text style={styles.helloText}>Hello, Welcome 🎉</Text>
            <Text style={styles.nameText}>Savannah Nguyen</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications" size={22} color="#fff" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#aaa" />
          <TextInput
            placeholder="Search Doctor..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>

      </View>

      {/* White content area */}
      <View style={styles.content}>

        {/* Category filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
        >
          <TouchableOpacity style={styles.categoryActive}>
            <Text style={styles.categoryActiveText}>🔥 All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryInactive}>
            <Text style={styles.categoryInactiveText}>🤧 Fever</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryInactive}>
            <Text style={styles.categoryInactiveText}>🤧 Cough</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryInactive}>
            <Text style={styles.categoryInactiveText}>🤢 Nausea</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Favourite Doctors */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favourite Doctor</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Favourite Doctor Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.favRow}
        >

          {/* Doctor Card 1 */}
          <View style={styles.favCard}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8SLL-M_4915O6nW-WW-COgbGQPPFhchSMw&s' }}
              style={styles.favImage}
            />
            <Text style={styles.favName}>Dr. Esther</Text>
            <Text style={styles.favSpecialty}>Dentist</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color="#FFC107" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>

          {/* Doctor Card 2 */}
          <View style={styles.favCard}>
            <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/050/817/819/small/happy-smiling-male-doctor-with-hand-present-something-empty-space-standing-isolate-on-transparent-background-png.png' }}
              style={styles.favImage}
            />
            <Text style={styles.favName}>Dr. Warren</Text>
            <Text style={styles.favSpecialty}>Physician</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color="#FFC107" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>

        </ScrollView>

        {/* Top Doctors */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Doctor</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Top Doctor Card */}
        <View style={styles.topDoctorCard}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFqq7D7yLi4hxkNg_Pn-pGBs9HyzBsqSJkg&s' }}
            style={styles.topDoctorImage}
          />
          <View style={styles.topDoctorInfo}>
            <Text style={styles.topDoctorName}>Dr. Jenny Wilson</Text>
            <Text style={styles.topDoctorSpecialty}>
              Neurologist | Vcare Clinic
            </Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color="#FFC107" />
              <Text style={styles.ratingText}>5.0 (332 reviews)</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={20} color="#aaa" />
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4B4EFC',
    padding: 24,
    paddingTop: 60,
    paddingBottom: 30,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  welcomeText: {
    flex: 1,
  },
  helloText: {
    color: '#ffffff',
    fontSize: 13,
    opacity: 0.9,
  },
  nameText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationBtn: {
    position: 'relative',
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4444',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  content: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 0,
    padding: 20,
    minHeight: 600,
  },
  categoryRow: {
    marginBottom: 24,
  },
  categoryActive: {
    backgroundColor: '#4B4EFC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 10,
  },
  categoryActiveText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  categoryInactive: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 10,
  },
  categoryInactiveText: {
    color: '#555',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  seeAll: {
    color: '#4B4EFC',
    fontSize: 13,
    fontWeight: '600',
  },
  favRow: {
    marginBottom: 24,
  },
  favCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
    width: 160,
    alignItems: 'center',
  },
  favImage: {
    width: '100%',
    height: 130,
    borderRadius: 12,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  favName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  favSpecialty: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 13,
    color: '#555',
    fontWeight: '600',
  },
  topDoctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    gap: 12,
  },
  topDoctorImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  topDoctorInfo: {
    flex: 1,
    gap: 4,
  },
  topDoctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  topDoctorSpecialty: {
    fontSize: 12,
    color: '#aaa',
  },
});