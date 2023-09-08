import React from 'react';
import { Text, StyleSheet, View,ScrollView, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


//drink

const Catagories = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.head}>catagories</Text>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={Styles.box}>
        <MaterialCommunityIcons name="hamburger" size={34} style={Styles.myicon} />
        <Text style={Styles.text}>Burger</Text>

        
      </View>

      <View style={Styles.box}>
        <FontAwesome5 name="pizza-slice" size={34} style={Styles.myicon} />
        <Text style={Styles.text}>pizza</Text>
      </View>

      <View style={Styles.box}>
        <MaterialCommunityIcons name="cake" size={34} style={Styles.myicon} />
        <Text style={Styles.text}>cake</Text>
      </View>

      <View style={Styles.box}>
        <SimpleLineIcons name="cup" size={34} style={Styles.myicon} />
        <Text style={Styles.text}>Coffee </Text>
      </View>

      <View style={Styles.box}>
        <Ionicons name="ice-cream" size={34} style={Styles.myicon} />
        <Text style={Styles.text}>ice-cream</Text>
      </View>

       <View style={Styles.box}>
        <MaterialCommunityIcons name="food-apple" size={34} style={Styles.myicon} />
        <Text style={Styles.text}>Apple</Text>
      </View>

      <View style={Styles.box}>
        <Ionicons name="wine" size={34} style={Styles.myicon} />
        <Text style={Styles.text}>Drink</Text>
      </View>

      </ScrollView>
    </View>
  );
};

export default Catagories;
const Styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    width:"100%",

    elevation:10,
    borderRadius:13,
    paddingRight:10,
    marginBottom:10
    
    
    
    
  },


  box: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    
  },

head:{
  color:"red",
  fontSize:25,
  fontWeight:'300',
  margin:10,
  alignSelf:'center',
  paddingBottom:5,
  borderBottomColor:"red",
  borderBottomWidth:1,
  
},
box:{
  backgroundColor:"white",
  elevation:20,
  margin:10,
  borderRadius:10,
   alignItems:"center",
   justifyContent:"center",
   flexDirection:"row",
   padding:3
   
  
},
myicon:{
  marginRight:10,
  color:"black"
},
text:{
  color:"black",

}





});
