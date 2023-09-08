import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import Homescreen from '../screen/Homescreen';
import Userprofile from '../screen/Userprofile';

const Homenav = ({navigation}) => {
  return (
    <View style={styles.continer}>
    <Entypo name="menu" size={34} color="black" style={styles.myicon}/>
  <View style={styles.continerin}>

<Text style={ styles.title}> hello foodie </Text>
<MaterialCommunityIcons name="food" size={34} color="black" style={styles.myicon}/>

  </View>

<TouchableOpacity onPress={()=> navigation.navigate('Userprofile')} >
  < EvilIcons name="user" size={34} color="black" style={styles.myicon}/>
  </TouchableOpacity>
</View>
  )
}

export default Homenav

const  styles=StyleSheet.create({
    continer:{
        flexDirection:'row',
       width:"100%",
        justifyContent:"space-between",
        padding:10,
        alignItems:"center",
        backgroundColor:"white",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        elevation:18,
        height:70
        },

        continerin:{
flexDirection:"row",
alignItems:"center"

        },

        myicon:{
            color:"#fc3f5c"
        },
       title:{
        fontSize:20,
        
       }        


})