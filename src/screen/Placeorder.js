import React, { useEffect, useState } from 'react';
import {  Text, View, Image,StyleSheet, FlatList,  } from 'react-native';
 import { firebase } from '../Firebase/FirebaseConfig'


const Placeorder = ({navigation, route}) => {
  const{cartdata} = route.params;

  // console.log(cartdata)

  const [order,setOrder]=useState();
  const [total,setTotal]=useState();
  

useEffect(()=>{
setOrder(JSON.parse(cartdata))
  

},[cartdata])
  
// console.log(order)

return (
    <View style={styles.main}>
      <Text style={styles.txt}>Your Order</Text> 

<FlatList style={styles.flt} data={order.cart} renderItem={
({item})=>{
return(

<View style={styles.componet}>
  <View style={styles.left}>
<Text>{item.FoodQuantity}</Text>

  </View>
  <View style={styles.right}></View>

</View>

)


}


}


/>



  


</View>

   
  );
};

export default Placeorder;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#d4f54e', 
    
  },
  
  txt: {
    fontSize: 30, 
    color: 'black', 
    textAlign: 'center',
   
  },
  componet:{
    backgroundColor:"white",
    
  }
});
