import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const Offerslide = () => {




    return (

        <View style={styles.container}>
            <View style={styles.offerslider}>
<Swiper autoplay={true} autoplayTimeout={1} showsButtons={false}
dotColor='white' activeDotColor='red'  >
   
   
    <View style={styles.slide}>
   
        <Image source={{uri:"https://i.pinimg.com/564x/4f/9e/33/4f9e3324c688d8f6d166e674533a08a0.jpg"}} style={styles.image}/>
        
    </View>

    <View style={styles.slide}>
      
        <Image source={{uri:"https://i.pinimg.com/564x/fa/44/6e/fa446ecdc053833d90007a5bf315466b.jpg"}}style={styles.image}/>
        
    </View>

    <View style={styles.slide}>
        <Image source={{uri:"https://i.pinimg.com/564x/c1/b3/0b/c1b30bec991cb8a13037f627bb59a38b.jpg"}}style={styles.image}/>

    </View>

    <View style={styles.slide}>
        <Image source={{uri:"https://i.pinimg.com/564x/f9/28/c7/f928c7a847fe15cae1faa06966de7e40.jpg"}}style={styles.image}/>

    </View>

</Swiper>

            </View>



        </View>

    )
}


export default Offerslide;

const styles=StyleSheet.create({
container:{
flex:1,
alignItems:"center"
},

    
offerslider:{
    width:"100%",
    height:200, //200
    backgroundColor:"white",
    
    justifyContent:"center",
    alignItems:"center",
    
    
    

    
},
slide:{
    width:"100%",
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:"center",
    height:"100%"
   
},
image:{
    height: '100%',
    width: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
}

})