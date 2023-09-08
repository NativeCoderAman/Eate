import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebase } from '../Firebase/FirebaseConfig';
// import FirebaseConfig  from '../Firebase/FirebaseConfig'

const SignupScreen = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showPName, setShowPName] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [Phoneno, setPhoneno] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const [customError, setCustomError] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSignup = () => {
    const FormData = {
      email: email,
      Phoneno: Phoneno,
      name: name,
      password: password,
      cpassword: cpassword,
    };

    if (password !== cpassword) {
      setCustomError("Passwords don't match");
      return;
    } else if (Phoneno.length !== 10) {
      setCustomError('Phone number should be 10 digits');
      return;
    }

    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User created successfully');
          setSuccessMessage('User registered successfully');

          // Add user data to Firestore
          const useRef = firebase.firestore().collection('UserData');
          useRef.add(FormData).then(()=>{
            console.log(" data sumbmit successfully")
          });
        })
        .catch((error) => {
          console.log('Firebase auth error:', error.message);
          setCustomError(' The email address is already in use by another account');
        });
    } catch (error) {
      console.log('Signup error:', error.message);
      setCustomError('Failed to create user');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign up</Text>

      <View style={styles.inputOut}>
        <SimpleLineIcons name="user" size={34} color={showPName ? 'red' : 'black'} />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Name"
          onFocus={() => {
            setShowPName(true);
            setPasswordFocus(false);
            setEmailFocus(false);
            setShowPassword(false);
          }}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputOut}>
        <MaterialCommunityIcons
          name="email"
          size={34}
          color={emailFocus ? 'red' : 'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
            setShowPassword(false);
            setShowPName(false);
          }}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputOut}>
        <Feather name="lock" size={34} color={passwordFocus ? 'red' : 'black'} />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Password"
          onFocus={() => {
            setPasswordFocus(true);
            setEmailFocus(false);
            setShowPassword(false);
            setShowCPassword(false);
          }}
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <Feather
          name={showPassword ? 'eye' : 'eye-with-line'}
          size={30}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={styles.inputOut}>
        <Feather name="lock" size={34} color={showCPassword ? 'red' : 'black'} />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Confirm Password"
          onFocus={() => {
            setShowCPassword(true);
            setPasswordFocus(false);
            setEmailFocus(false);
            setShowPName(false);
            setNumberFocus(false);
          }}
          secureTextEntry={!showCPassword}
          onChangeText={(text) => setCpassword(text)}
        />
      </View>

      <View style={styles.inputOut}>
        <Icon name="phone" size={34} color={numberFocus ? 'red' : 'black'} />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Phone Number"
          onFocus={() => {
            setNumberFocus(true);
            setPasswordFocus(false);
            setEmailFocus(false);
            setShowPassword(false);
            setShowPName(false);
          }}
          onChangeText={(text) => setPhoneno(text)}
        />
      </View>

      {customError ? <Text style={styles.errorText}>{customError}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={() => handleSignup()}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Sign up</Text>
      </TouchableOpacity>

      {successMessage ? <Text style={{ color: 'green' }}>{successMessage}</Text> : null}

      <Text style={styles.gfc}>Sign in with</Text>

      <View style={styles.symbol}>
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

      <Text>Do you have an account?</Text>
      <Text
        onPress={() => navigation.navigate('login')}
        style={{ color: 'red', fontSize: 16, marginBottom: 20 }}>
        Sign in
      </Text>
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
  inputOut: {
    flexDirection: 'row',
    width: '85%',
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
    alignSelf: 'center',
    height: 60,
  },
  input: {
    fontSize: 17,
    width: '78%',
    paddingHorizontal: 10,
  },
  gfc: {
    fontSize: 25,
    marginVertical: 10,
    color: 'grey',
    elevation: 10,
  },
  symbol: {
    flexDirection: 'row',
  },
  gf: {
    backgroundColor: 'white',
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
  btn: {
    backgroundColor: 'red',
    width: 250,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  signInText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default SignupScreen;
