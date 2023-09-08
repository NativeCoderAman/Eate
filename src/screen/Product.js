import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'

import { firebase } from '../Firebase/FirebaseConfig'
import AnyDesign from 'react-native-vector-icons/AntDesign'



const Product = ({ navigation, route }) => {
  const data = route.params;
  //  console.log(data)
  if (route.params === undefined) {
    navigation.navigate('home')

  }

  const [quantity, setQuantity] = useState('1');
  const [addonquantity, setAddonquantity] = useState('0')

  const Addtocart = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      const docRef = firebase.firestore().collection('UserCart').doc(user.uid);
      const data1 = { data, Addquantity: addonquantity, FoodQuantity: quantity };
      docRef.get().then((doc) => {
        if (doc.exists) {
          docRef.update({
            cart: firebase.firestore.FieldValue.arrayUnion(data1)
          });
          alert("Added to cart");
        } else {
          docRef.set({
            cart: [data1],
          });
          alert("Added to cart");
        }
      });
    } else {
      console.log("User not logged in");
    }
  };
  
  const incresequanity = () => {
    setQuantity((parseInt(quantity) + 1).toString())
  }

  const decresequanity = () => {
    if (parseInt(quantity)) {
      setQuantity((parseInt(quantity) - 1).toString())
    }
  }


  const addincresequanity = () => {
    setAddonquantity((parseInt(addonquantity) + 1).toString()); // Add parentheses to call the toString() method correctly.
  };

  const adddeincresequanity = () => {
    if (parseInt(addonquantity)) {
      setAddonquantity((parseInt(addonquantity) - 1).toString()); // Add parentheses to call the toString() method correctly.
    }
  };


  // console.log(data.foodaddonprice)

  // console.log(quantity)

  // console.log(data.id)
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: "white",
      width: "100%"
    }}>
      <TouchableOpacity onPress={() => navigation.navigate('home')}
        style={{
          position: 'absolute',
          Top: 0,
          left: 0,
          zindex: 10

        }}>
        <View style={{
          backgroundColor: "red",
          width: 50,
          height: 50,
          aalignItems: 'center',
          justifyContent: 'center',
          elevation: 10,
          borderRadius: 50,
          borderTopLeftRadius: 0,

        }} >

          <AnyDesign name="back" color="white" size={40} style={{ color: "white" }} />

        </View>
      </TouchableOpacity>
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>

        <View
          style={{ width: "100%", height: 300, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', }}>
          <Image source={{ uri: data.foodimageurl }} style={{ width: "100%", height: "100%", }} />

        </View>

        <View style={{
          width: '100%',
          padding: 20,
          position: 'relative',
          top: -30,
          backgroundColor: "#f73942",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>

            <Text style={{
              fontSize: 25, color: "white", marginRight: 10,
              fontWeight: '700', elevation: 10, width: 200
            }} >{data.foodname}</Text>
            <Text style={{ fontSize: 35, fontWeight: '400', color: "#fff", elevation: 10 }}>RS-{data.foodprice}</Text>

          </View>

          <ScrollView>

            <View style={{
              backgroundColor: "#f73942",
              padding: 20,
              borderRadius: 20,
            }}>


              <Text style={{
                fontSize: 30,
                fontWeight: '200', color: "white"
              }}>About Food</Text>

              <Text style={{
                marginVertical: 10,
                fontSize: 20,
                fontWeight: '400',
                color: "white",
              }}>{data.foodDescription}</Text>

            </View>

            <View style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              width: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              {data.foodtype == "vag" ? <Text style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                backgroundColor: 'green',
              }}>


              </Text> : <Text style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                backgroundColor: 'red',
              }}></Text>}




            </View>

            <View style={{
              width: '90%',
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
              alignSelf: 'center',
              marginVertical: 10,
              elevation: 10,
              alignItems: 'center',
            }}>

              <Text style={{
                color: "red",
                fontSize: 25,
                fontWeight: '300',
              }}>location</Text>

              <Text style={{
                color: "black",
                fontSize: 30,
                fontWeight: '200',
                marginVertical: 10,
              }}>{data.foodrestaurant}</Text>

              <View style={{ backgroundColor: "white", alignItems: "center", flexDirection: "row" }}>


                <Text style={{ fontSize: 18, }}>{data.restaurantCityPincode}</Text>
                <View style={{
                  width: 1,
                  height: 20,
                  backgroundColor: "black",
                  marginHorizontal: 10,
                }}></View>
                <Text style={{ fontSize: 18 }}>{data.restaurantCity}</Text>
                <View style={{ width: 1, height: 20, backgroundColor: "black", marginHorizontal: 10 }}></View>
                <Text style={{ fontSize: 18 }}>{data.restaurantAddressbuilding}</Text>


              </View>


            </View>

            <View style={{
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
            }}>






              {data.foodaddonprice != "" &&


                <View style={{
                  width: '90%',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>

                  <View style={{ width: '90%', borderBottomColor: '#f75464', borderBottomWidth: 1, marginVertical: 20, alignItems: "center" }}></View>

                  <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}> Add  Extra </Text>


                  <Text style={{ fontSize: 18, color: "white" }}>{data.foodaddon} Rs-{data.foodaddonprice}</Text>


                </View>
              }

              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
              }}>

                <Text style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  elevation: 10,
                  padding: 10,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',

                }} onPress={() => { addincresequanity() }}>+</Text>

                <TextInput value={addonquantity} style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 10,
                  padding: 10,
                  width: 50,
                  marginHorizontal: 10,
                  fontSize: 20, borderRadius: 15
                }} />


                <Text style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  elevation: 10,
                  padding: 10,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',

                }} onPress={() => { adddeincresequanity() }}>-</Text>


              </View>
              <View style={{ width: '90%', borderBottomColor: '#f75464', borderBottomWidth: 1, marginVertical: 20, alignItems: "center" }}></View>

              <Text style={{ fontSize: 17, color: "white", fontWeight: "500" }}>Food Quantity</Text>

              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
              }}>
                <Text style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  elevation: 10,
                  padding: 10,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',

                }} onPress={() => { incresequanity() }}>+</Text>
                <TextInput value={quantity} style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 10,
                  padding: 10,
                  width: 50,
                  marginHorizontal: 10,
                  fontSize: 20, borderRadius: 15
                }} />

                <Text style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  elevation: 10,
                  padding: 10,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',

                }} onPress={() => { decresequanity() }}>-</Text>


              </View>




              <View style={{ width: '90%', borderBottomColor: '#f75464', borderBottomWidth: 1, marginVertical: 20, alignItems: "center" }}></View>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '90%',
                    backgroundColor: 'white',
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 30,
                      fontWeight: '200',
                      marginVertical: 10,
                      marginRight: 70

                    }}
                  >
                    Food Price
                  </Text>

                  {data.foodaddonprice !== '' ? (
                    <Text style={{ fontSize: 20 }}>
                      {(
                         parseInt(data.foodprice) * parseInt(quantity)+
                        parseInt(data.foodaddonprice) * parseInt(addonquantity) 
                      ).toString()}
                    </Text>
                  ) : (
                    <Text>
                      {(
                        parseInt(data.foodaddonprice) * parseInt(quantity)
                      ).toString()}
                    </Text>
                  )}
                </View>

                <View
                  style={{
                    width: '90%',
                    borderBottomColor: '#f75464',
                    borderBottomWidth: 1,
                    marginVertical: 20,
                    alignItems: 'center',
                  }}
                ></View>
              </View>




              <View
                style={{
                  width: '90%',
                  borderBottomColor: '#f75464',
                  borderBottomWidth: 1,
                  marginVertical: 20,
                  alignItems: 'center',
                }}
              ></View>
            </View>







            <View style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 0,
              flexDirection: 'row', backgroundColor: "#f73942",
            }}>

              <TouchableOpacity style={{
                width: 150,
                height: 50,
                backgroundColor: '#f73942',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 10,
                color: 'white',
                margin: 10,
                alignSelf: 'center',
              }} onPress={() => Addtocart()}>
                <Text style={{
                  backgroundColor: "white",
                  color: "red",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  fontSize: 20,
                  borderRadius: 10,
                  width: '90%',
                  textAlign: 'center',
                }}> add to cart</Text>



              </TouchableOpacity>


              <TouchableOpacity style={{
                width: 150,
                height: 50,
                backgroundColor: '#f73942',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 10,
                color: 'white',
                margin: 10,
                alignSelf: 'center',
              }} >
                <Text style={{
                  backgroundColor: "white",
                  color: "red",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  fontSize: 20,
                  borderRadius: 10,
                  width: '90%',
                  textAlign: 'center',
                }}> buy </Text>



              </TouchableOpacity>


            </View>



          </ScrollView>

        </View>

      </View>

    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: "white",
    width: "100%"

  },
  btna: {
    width: "10%",

    backgroundColor: "red",

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  ai: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardimage: {
    width: '100%',
    height: '100%',
  }


});