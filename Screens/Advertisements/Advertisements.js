import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

// דמה לנתונים של עורכי דין
const lawyers = [
  {
    id: '1',
    name: 'עו"ד אילון אורון',
    role: 'מומחה לדיני תעבורה',
    phone: '077-2306138',
    imageUrl: 'https://oron-law.co.il/wp-content/uploads/2022/08/Oron2.jpg',
  },
  {
    id: '2',
    name: 'עו"ד אלעד פאר',
    role: 'מומחה לדיני תעבורה',
    phone: '050-650-6866',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOx5MElbkoYvfZ5KlUbZn592bWTvyBR_n4tJygf_9Jw&s',
  },
  {
    id: '3',
    name: 'עו"ד מאיה אלקריף',
    role: 'מתמחה לדיני תעבורה',
    phone: '1-801-705-214',
    imageUrl: 'https://elkarif.co.il/wp-content/uploads/2023/04/DSCF1724A-700x1024-1.jpg',
  },
  {
    id: '4',
    name: 'עו"ד ליאור נפתלי ',
    role: 'דיני תעבורה',
    phone: '077-8054-857',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipN-Nj-cJize47j1fXUcOy31DT7vbct1Ri3VPhcr=s1360-w1360-h1020',
  },
  {
    id: '5',
    name: 'עו"ד חגי ואלון סער ',
    role: 'דיני תעבורה',
    phone: '054-305-4484',
    imageUrl: 'https://fra1.digitaloceanspaces.com/ramle-st.co.il/2022/08/%D7%97%D7%92%D7%99-%D7%95%D7%90%D7%9C%D7%95%D7%9F-%D7%A1%D7%A2%D7%A8-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%97%D7%A6.png',
  },
];

const LawyerItem = ({ lawyer }) => (
    
  <View style={styles.cardContainer}>
    <Image source={{ uri: lawyer.imageUrl }} style={styles.image} />
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{lawyer.name}</Text>
      <Text style={styles.role}>{lawyer.role}</Text>
      <Text style={styles.phone}>{lawyer.phone}</Text>
    </View>
  </View>
);

const AdvertisementScreen = () => {
  return (
    <View>
    <Text style={styles.title}>עורכי הדין בתחום: </Text>
    <FlatList
      data={lawyers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <LawyerItem lawyer={item} />}
      contentContainerStyle={styles.list}
    />
    </View>

  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
    marginTop:10
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:80,
    color: '#333', 
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    color: '#666',
    fontSize: 14,
  },
  phone: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
});

export default AdvertisementScreen;
