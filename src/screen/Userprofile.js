import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { firebase } from '../Firebase/FirebaseConfig';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Userprofile = ({ navigation }) => {
  const [userloggeduid, setUserloggeduid] = useState(null);
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUserloggeduid(user.uid);
        } else {
          console.log('User not logged in');
        }
      });
    };

    
    checklogin();
  }, []);


  
  useEffect(() => {
    const getuserdata = async () => {
      try {
        const docRef = firebase.firestore().collection('UserData').where('uid', '==', userloggeduid);
        const querySnapshot = await docRef.get();

        if (!querySnapshot.empty) {
          setUserdata(querySnapshot.docs[0].data());
        } else {
          setUserdata(null);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    if (userloggeduid) {
      getuserdata();
    }
  }, [userloggeduid]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <AntDesign name="back" color="red" size={40} />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Text style={styles.heading}>User Profile</Text>
        {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : userdata ? (
          <View style={styles.profileDataContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{userdata.name}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{userdata.email}</Text>
            {/* Add more user data fields here */}
          </View>
        ) : (
          <Text style={styles.noDataText}>No user data found.</Text>
        )}
      </View>
    </View>
  );
};

export default Userprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileDataContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  noDataText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});
