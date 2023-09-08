import React from 'react';
import { View, Text } from 'react-native';
import Login from './src/screen/Loginscreen';
import Welcomescreen from './src/screen/Welcomescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Singupscreen from './src/screen/Singupscreen';
import Homescreen from './src/screen/Homescreen';
import Userprofile from './src/screen/Userprofile';
import Product from './src/screen/Product';
import {firebase} from './src/Firebase/FirebaseConfig';  
import Cardslider from './src/Component/Cardslider';
import Usercart from './src/screen/Usercart';
import Placeorder from './src/screen/Placeorder';


const App = () => {
  const Stack=createNativeStackNavigator();
  return (
<NavigationContainer>

<Stack.Navigator initialRouteName=' welcomes'>
<Stack.Screen name='welcome' component={Welcomescreen} options={{headerShown:false}}/>
 <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
<Stack.Screen name='sing up' component={Singupscreen} options={{headerShown:false}}/>
<Stack.Screen name="home" component={Homescreen} options={{headerShown:false}}/>
<Stack.Screen name="Userprofile" component={Userprofile} options={{headerShown:false}}/>
<Stack.Screen name="Product" component={Product} options={{headerShown:false}}/>
<Stack.Screen name="Usercart" component={Usercart} options={{headerShown:false}}/>
<Stack.Screen name="Placeorder" component={Placeorder} options={{headerShown:false}}/>



</Stack.Navigator>

</NavigationContainer>
   
  );
};

export default App;
