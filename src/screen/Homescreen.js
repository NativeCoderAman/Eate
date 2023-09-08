import React, { useState, useEffect, } from 'react'; //use ref
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView,FlatList } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Homenav from '../Component/Homenav';
import Catagories from '../Component/Catagories';
import Offerslide from '../Component/Offerslide';
import FirebaseConfig from '../Firebase/FirebaseConfig';
import Cardslider from '../Component/Cardslider';
import Bottomnav from '../Component/Bottomnav';


const Homescreen = ({ navigation }) => {
  const [foodData, setFoodData] = useState([]);
  const [vagdata, setVagdata] = useState([]);
  const [nonvagdata, setNonvagdata] = useState([]);


const [search, setSearch] = useState('')


  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseConfig);
    }

    const foodRef = firebase.firestore().collection('FoodData');
    const unsubscribe = foodRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setFoodData(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filteredData = foodData.filter((item) => item.foodtype == 'vag');
    setVagdata(filteredData);
  }, [foodData]);

  useEffect(() => {
    const filteredData = foodData.filter((item) => item.foodtype == 'nonvag');
    setNonvagdata(filteredData);
  }, [foodData]);





  return (
    <View style={styles.container}>

      <StatusBar />
      <Homenav  navigation={navigation}/>
<View style={{  position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: "white",
        zIndex: 20,}}>
      <Bottomnav navigation={navigation}/>
</View>
<ScrollView>
      <View style={styles.searchbox}>
        <TextInput placeholder="search" style={styles.searchinput} onChange={(e)=>{setSearch(e)}} />
      </View>



{search != '' && <View style={styles.seacrhresultsouter}>
                    <FlatList style={styles.searchresultsinner} data={foodData} renderItem={
                        ({ item }) => {
                          if (item.foodname.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                    <View style={styles.searchresult}>
                                        <AntDesign name="arrowright" size={24} color="black" />
                                        <Text style={styles.searchresulttext}>{item.foodName}</Text>
                                    </View>
                                )
                            }
                        }
                    } />
                </View>}

      <Catagories />
      <Offerslide />
      <Cardslider title={"Today spicale"} data={foodData} navigation={navigation} />
      <Cardslider title={"Welcome vag  Lover "} data={vagdata} navigation={navigation} />
      {/* <Cardslider title={" NonVag Lover "} data={nonvagdata} navigation={navigation} /> */}

      </ScrollView>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',

    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
    borderRadius: 30,
    height: 35,
    marginBottom: 8,
    height: "3%",
  },
  searchinput: {
    marginLeft: 10,
    width: '90%',
    backgroundColor: 'white',
    height: 45,
    fontSize: 20

  },

  seacrhresultsouter: {
    width: '100%',
    marginHorizontal: 30,
    height: '100%',
    backgroundColor: "white",
},
searchresultsinner: {
    width: '100%',
},
searchresult: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 5,
},
searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color:"red",
},
// bottomnav: {
//     position: 'absolute',
  
//     width: '100%',
//     backgroundColor: "white"
   
// },



});
