import {  Text, View, } from 'react-native'
import React from 'react'
import  AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const Bottomnav = ({navigation }) => {
  return (
    <View style={{ flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    elevation: 30,
    borderTopColor: "black",
    borderTopWidth: 0.5,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding:1
    }}>
     
     <View style={{ alignItems: 'center',}} >
        
        <AntDesign name="home" size={40} color={"red"} onPress={() => { navigation.navigate('welcome') }} />

 </View>
 
        
        
        <View style={{ alignItems: 'center',}} >
        <Feather name="shopping-cart" size={40} color={"red"} onPress={()=>{navigation.navigate('Usercart')}}/>
        </View>

        <View style={{ alignItems: 'center',}} >

        <EvilIcons name="user"  size={40} color={"red"} onPress={()=>{navigation.navigate('welcome')}}/>
</View>






    

    </View>
  )
}

export default Bottomnav


