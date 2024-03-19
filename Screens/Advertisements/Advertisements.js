import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity ,Linking} from 'react-native';

const lawyers = [
  {
    id: '1',
    name: 'עו"ד אילון אורון',
    role: 'דיני תעבורה',
    phone: '077-2306138',
    imageUrl: 'https://oron-law.co.il/wp-content/uploads/2022/08/Oron2.jpg',
  },
  {
    id: '2',
    name: 'עו"ד אלעד פאר',
    role: 'דיני תעבורה',
    phone: '050-650-6866',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOx5MElbkoYvfZ5KlUbZn592bWTvyBR_n4tJygf_9Jw&s',
  },
  {
    id: '3',
    name: 'עו"ד מאיה אלקריף',
    role: 'דיני תעבורה',
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
{
  id: '6',
  name: 'עו"ד משה רבי',
  role: 'דיני תעבורה',
  phone: '055-882-3088',
  imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPn8VelmbuKkx4l0iwpf0DA7ywegzyGGhdRIA8R=s1360-w1360-h1020',
},
{
id: '7',
name: 'עו"ד דוד גולן',
role: 'דיני תעבורה',
phone: '03-628-7500',
imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNKMaTxXKPzgdD3p3UspEP-Kb0sozfuyG5a4Bqe=s1360-w1360-h1020',
},
{
id: '8',
name: 'עו"ד יוסי יורוביצקי ',
role: 'דיני תעבורה',
phone: '054-598-7119',
imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMjL-P92-Ai0Sb3o7jM7x9OboH0Z6oUlY4s6zRc=s1360-w1360-h1020',
},
];

const LawyerItem = ({ lawyer }) => (
  <TouchableOpacity onPress={() => Linking.openURL(`tel:${lawyer.phone}`)}>
    <View style={styles.cardContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{lawyer.name}</Text>
        <Text style={styles.role}>{lawyer.role}</Text>
        <Text style={styles.phone}>{lawyer.phone}</Text>
      </View>
      <Image source={{ uri: lawyer.imageUrl }} style={styles.image} />
    </View>
  </TouchableOpacity>
);

const AdvertisementScreen = () => {
  return (
    <View style={{ flex: 1 }}>
    <Text style={styles.title}> עורכי הדין בתחום התעבורה:  </Text>
    <FlatList showsVerticalScrollIndicator={false}
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
    alignItems:'flex-end',
    marginRight:15

  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  role: {
    color: '#666',
    fontSize: 15,
  },
  phone: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
});

export default AdvertisementScreen;
