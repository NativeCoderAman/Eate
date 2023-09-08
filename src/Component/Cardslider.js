import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Cardslider = ({ title, data, navigation }) => {

  const openproduct = (item) => {
    // console.log(item);
    navigation.navigate('Product',item)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardtitle}>{title}</Text>
      <FlatList
        style={styles.maincard}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openproduct(item)}>
            <View style={styles.card}>
              <View style={styles.a1}>
                <Image source={{ uri: item.foodimageurl }} style={styles.cardimage} />
              </View>

              <View style={styles.a2}>
                <Text style={styles.foodname}>{item.foodname}</Text>

                <View style={styles.a2on}>
                  <Text style={styles.price}>RS.{item.foodprice}/-</Text>
                  {item.foodtype == 'vag' ? (
                    <Text style={styles.vag}>Vag</Text>
                  ) : (
                    <Text style={styles.nonvag}>NV</Text>
                  )}
                </View>
              </View>

              <View style={styles.a3}>
                <Text style={styles.buybtn}>buy</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        // Add a valid keyExtractor
      />
    </View>
  );
};

export default Cardslider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
  },
  cardtitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
    marginHorizontal: 10,
    borderRadius: 25,
    
  },
  maincard: {
    width: '100%',
    backgroundColor: 'white',
    
  },
  card: {
    width: 350,
    height: 300,
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'gold',
    backgroundColor: 'white',
  
  },
  cardimage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  a2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodname: {
    fontSize: 20,
    color: 'black',
    marginRight: 10,
  },
  a2on: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  a3: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 1,
    width: '100%',
    backgroundColor: 'red',
    marginBottom: 60,
    borderRadius: 40,
    marginBottom:20
  },
  buybtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 10,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center',
    color: 'white',
  },
  vag: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'green',
    marginLeft: 5,
  },
  nonvag: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginLeft: 5,
  },
  a1:{
    height:200
  },


});
