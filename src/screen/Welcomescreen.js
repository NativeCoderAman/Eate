import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {firebase} from '../Firebase/FirebaseConfig';
import Login from './Loginscreen';
import Entypo from 'react-native-vector-icons/Entypo'



const Welcomescreen = ({ navigation }) => {

const [userlogged,setUserlogged]=useState(null);

useEffect(()=>{
const checklogin =()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      //  console.log(user);
      setUserlogged(user);
    }
    else{
      // setUserlogged(null);
      console.log("no user login in")
    }
  })
}
checklogin();

},[])
// console.log(userlogged)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodie </Text>

      <View style={styles.logoContainer}>
        <Image
          source={{
            uri:"https://o.remove.bg/downloads/b6c84f21-792e-4603-ace1-9d422dcd2010/962782330db012679b2278f0e109caec-removebg-preview.png" }}
          style={styles.logoImage}
        />
      </View>
      
     

      {userlogged && <Text style={{ fontSize: 15, color: "white" , elevation: 80,fontWeight:'bold' }}>{userlogged.email}</Text>}
     

      <View style={styles.separator} />
      <Text style={styles.text}>
        Delicious food at your fingertips.{'\n'}Order now.
      </Text>

      <View style={styles.separator} />
      <View style={styles.buttonContainer}>


      
        
        <TouchableOpacity onPress={()=>{navigation.navigate('sing up')}} >
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('login')}} >
          <Text style={styles.button} >Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('home')}} >
          <Text style={styles.button}>Go to Home </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f73942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '400',
    marginBottom: 20,
  },
  logoContainer: {
    width: '91%',
    height: '45%',
    alignItems: 'center',
  },
  logoImage: {
    width: '90%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 17,
    elevation: 15,
    fontWeight: '400',
  },
  separator: {
    width: '80%',
    borderColor: 'white',
    borderBottomWidth: 2,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '600',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    padding: 8,
  },
});

export default Welcomescreen;
