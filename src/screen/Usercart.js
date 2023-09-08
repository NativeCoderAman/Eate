import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect,} from 'react'
import { firebase } from '../Firebase/FirebaseConfig'
import Bottomnav from '../Component/Bottomnav'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'




const Usercart = ({navigation}) => {
const [cartdata,setCartData]=useState(null);
const [totalconst,setTotalcost]=useState('0');

const getCartData = async () => {
  const user = firebase.auth().currentUser;
  if (user) {

    
    const docRef = firebase.firestore().collection('UserCart').doc(user.uid);
    
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = JSON.stringify(doc.data());
        setCartData(data);
      } else {
        console.log('no such a document');
      }
    }).catch((error) => {
      console.log("error getting document ", error);
    });
  } else {
    console.log("User not logged in");
  }
};


useEffect(()=>{
  getCartData();
},[]);

// console.log(cartdata)

useEffect(()=>{
  if(cartdata !=null){
    const food=JSON.parse(cartdata).cart;
   console.log(food);

   let totalfoodprice=0;
   food.map((item)=>{
    //  console.log(item.data.foodprice)
    // console.log(item.FoodQuantity)
    // console.log(item.data.foodaddon)
    // console.log(item.data.foodaddonprice)

    totalfoodprice = (parseInt(item.data.foodPrice) * parseInt(item.FoodQuantity)) +
                    (parseInt(item.data.foodaddonprice) * parseInt(item.foodaddonprice)) + totalfoodprice;

                  })
                    //  console.log(totalfoodprice)
                     setTotalcost(JSON.stringify(totalfoodprice))
  
   console.log(totalfoodprice)

  }
},[cartdata])

const deleteItem=(item)=> {
  const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().currentUser.uid);
  docRef.update({
      cart: firebase.firestore.FieldValue.arrayRemove(item)
  })
  getCartData();

}


  return (
<View style={styles.containerout}>
    {/* <Text style={styles.heading}>Your Cart</Text> */}
    <View style={styles.Bottomnav}>
      <Bottomnav navigation={navigation} />
    </View>

    <View style={styles.container}>
      {cartdata === null || JSON.parse(cartdata)?.cart?.length === 0 ? (
        <Text style={styles.head1}>Your cart is empty</Text>
      ) : (
        <Text style={styles.head2}>Your cart data is available</Text>
      )}

      {cartdata && JSON.parse(cartdata)?.cart ? (
        <FlatList
          style={styles.list}
          data={JSON.parse(cartdata).cart}
          renderItem={({ item }) => (
            <View style={styles.cartdatas}>
              <Image source={{ uri: item.data.foodimageurl }} style={styles.cardimg} />
<View style={styles.cardin}>
    <View style={styles.a1}>
<Text style={styles.txt1}>{item.FoodQuantity}</Text>


 <Text style={styles.txt2}>₹{item.data.foodprice}/-</Text>
    </View>

{item.Addquantity>0&&

<View style={styles.a2}>
  <Text style={styles.txt3}>{item.data.Addquantity} {item.data.foodaddon}</Text>
  <Text style={styles.txt3}>₹{item.data.foodaddonprice}/each</Text>

</View>
}
   <TouchableOpacity style={styles.t1} onPress={()=>{deleteItem(item)}} >
   <Text style={styles.txt1}>Delete</Text>
   <MaterialIcons name="delete" size={20} color={"red"}/>


   </TouchableOpacity>

    
</View>
            </View>
          )}
        />
      ) : null}

<View style={styles.btncount}>
  <TouchableOpacity style={styles.btn2} >
    <Text style={styles.txt4} onPress={()=>{navigation.navigate('Placeorder',{ cartdata })}}>place order</Text>
  </TouchableOpacity>

  <View style={styles.a3}>
    <Text style={styles.txt5}>Total  </Text>
    <Text style={styles.txt5}>{totalconst} </Text>
    
    


   

  </View>

</View>

    </View>
  </View>
  )
}



export default Usercart;


const  styles=StyleSheet.create({
    containerout:{
flex:1,
backgroundColor:"#f73942",
width:"100%"

        
    },


    Bottomnav:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: "#f73942",
    zIndex: 20,
    
},
head1:{
    fontSize: 40,
        textAlign: 'center',
        // fontWeight: '200',
        // marginVertical: 20,
        color: "white",
    
},
head2:{
    fontSize: 30,
    textAlign: 'center',
    // fontWeight: '200',
    // marginVertical: 20,
    color: "white",
    
},
heading:{
    fontSize:20,
    color:"white",
    textAlign:"center"
},
list:{
    width:"100%"
},
cartdatas:{
    flexDirection: 'row',
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    elevation: 10,
    alignItems: 'center',
},
cardimg:{
    width: 150,
    height: 100,
    borderRadius: 10,
},
cardin:{
    flexDirection: 'column',
    margin: 5,
    width: '58%',
    alignItems: 'center',
    justifyContent: 'center',
},

a1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
},
txt1:{
    fontSize: 16,
    color:"black",
    width: '60%',
    fontWeight: 'bold',
},
txt2:{
    fontSize: 16,
        color: "black",
        fontWeight: 'bold',
},
a2:{ backgroundColor: "#d4f54e",
  borderRadius: 10,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 5,
  flexDirection: 'row',
},
txt3:{
  fontSize: 17,
        color: "black",
},
t1:{
  flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10,
        padding: 5,
},
btncount:{
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 0,
  flexDirection: 'row',
  marginBottom: 80,
  borderTopColor: "white",
  borderTopWidth: 0.2,
  
  
  
},
btn2:{
  width: 150,
  height: 50,
  backgroundColor: 'white',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 10,
  color: 'white',
  margin: 10,
  alignSelf: 'center',
},
txt4:{
  color:"red",
  fontSize:20
},
a3:{
  flexDirection:"row",
  alignItems: 'center',
  
},
txt5:{
  fontSize: 20,
  color: "white",
  marginHorizontal: 5,
},
txt6:{
  fontSize: 25,
        color: "black",
        marginHorizontal: 5,
        fontWeight: 'bold',
}
  

}) 