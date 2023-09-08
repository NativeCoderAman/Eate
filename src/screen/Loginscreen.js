import React, { useState } from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { firebase } from '../Firebase/FirebaseConfig';
import FirebaseConfig from '../Firebase/FirebaseConfig'





const Login = ({navigation}) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [password, setPassword] = useState(false);
  const [showpasswors, setShowpassword] = useState(false);

  const [email, setEmail] = useState('');
  const [passwordd, setPasswordd] = useState('');
  const [customerror, setcustomError] = useState('');

  const handlelogin = () => {
   firebase.auth().signInWithEmailAndPassword(email,passwordd)
   .then((userCredential)=>{
    //signed in
    var user =userCredential.user;
     console.log("User logged In",user);
    console.log("log in successfully !!!!!")
    // console.log(user)

    navigation.navigate('welcome')

   })
   //add on
   .catch((error)=>{
    var errorMessage=error.message;
    console.log(errorMessage);
 if(errorMessage==="firebs error pleanse enter email formatted.(auth/invalid-email)"
 ){
  setcustomError("please enter valid email")
 }
else{
  setcustomError("incorrect email and password")
}
   })
}

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Log in  </Text>

      {customerror ? <Text style={styles.errorText}>{customerror}</Text> : null}

      <View style={styles.inputout}>
        <Icon name="user" size={34} color={emailfocus ===
          true ? color = "red" : color = "black"} />

        <TextInput style={styles.input} placeholder="Email" onFocus={() => {
          setEmailfocus(true)
          setPassword(false)
          setShowpassword(false)
          setcustomError('')
        }}
         onChangeText={(text)=>{
          setEmail(text)
         }}
        
        />

      </View>

      <View style={styles.inputout}>
        <Entypo name="lock" size={34} color={password ===
          true ? color = "red" : color = "black"} />

        <TextInput style={styles.input} placeholder="password" onFocus={() => {
          setPassword(true)
          setEmailfocus(false)
          setShowpassword(true)
          setcustomError('')

        }}
          secureTextEntry={showpasswors === false ? true : false}

          onChangeText={(text)=>{
            setPasswordd(text)
          }}

        />

        <Entypo name={showpasswors == false ? "eye-with-line" :
          "eye"} size={30} color="black" onPress={() => setShowpassword(!showpasswors)}
          onFocus={() => {
            setPassword(true)
            setPassword(false)
            setPassword(false)


          }} />


      </View>
      <TouchableOpacity style={styles.btn1} onPress={()=>handlelogin()} >
        <Text style={styles.sig}> Log in </Text>

      </TouchableOpacity>

      {/* <Text style={styles.forgetpassword}> forgot password </Text> */}
      <Text style={styles.or}> or </Text>
      <Text style={styles.gfc}> Sign In </Text>

      <View style={styles.symoble}>
        <TouchableOpacity>
          <View style={styles.gf}>
            <Icon name="google-plus" size={35} color="#DB4437" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.gf}>
            <Icon name="facebook-f" size={35} color="#3b5998" />
          </View>
        </TouchableOpacity>


      </View>
      <View style={styles.hr08}></View>
   
        <Text style>  Don't have an  account </Text>
        <Text style={{color:"red",fontSize:16}} onPress={()=>{navigation.navigate('sing up')}}>  Sign Up  </Text>
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  head1: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
    alignSelf: "center"

  },
  input: {
    fontSize: 20,

    width: '78%',

  },

  btn1: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifycontent: 'center',
    elevation: 10,
    color: "white",
    backgroundColor: "red"
  },
  sig: {
    fontSize: 30,
    color: "white",
    elevation: 10,
  },
  forgetpassword: {
    color: "grey",
    marginTop: 20,
    marginBottom: 10,
    elevation: 15,


  },
  or: {
    marginVertical: 10,
    elevation: 10,
    color: "red",
    fontWeight: "bold",
    elevation: 10
  },

  gfc: {
    fontSize: 25,
    marginVertical: 10,
    color: "grey"
    , elevation: 10

  },
  symoble: {
    flexDirection: "row",

  },
  gf: {
    backgroundColor: "white",
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20

  },

  hr08: {
    width: '80%',
    borderBottomWidth: 2,
    borderColor: "white",
    padding: 12

  },

  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },

});

export default Login;
