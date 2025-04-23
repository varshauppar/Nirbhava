import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { colorList } from "../Utils/ColorList";
import logo from "../Assets/Logo/Logo1.png"
import InputBox from "../components/InputBox";
import Icon from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from 'react-native-vector-icons/Entypo';


export default function Account(props) {
 
   const [email, setEmail] = useState("")
    return (
        <SafeAreaView style={styles.bgWrapper}>

          
            <View style={styles.appLogoView}>    



<View style={styles.logoRow}>

           
        <Image source={logo} style={styles.appLogoImage} resizeMode="contain"></Image>
 

</View>

  
                  
  
              
 

            <Text style={{ color: "black", textAlign: "center", marginTop: 0, fontSize: 10, fontWeight: "600", }}>     FAUGET<Text style={{ color: '#cc6ea1' }}></Text> 
            </Text>
                
            <Text style={{ color: "#84eab3", textAlign: "center", marginTop: 15, fontSize: 20, fontWeight: "600", }}>PERSONAL DETAILS<Text style={{ color: '#cc6ea1' }}></Text> 
            </Text>
                
            </View>
                       <View style={styles.textView}>
                          <InputBox isError={false} type="Name" placeHolder="Name" onChangeText={(txt) => setEmail(txt)} />
                      
                       
                          <InputBox isError={false} type="Name" placeHolder="LastName" onChangeText={(txt) => setEmail(txt)} />
                          <InputBox isError={false} type="LastName" placeHolder="Email" onChangeText={(txt) => setEmail(txt)} />
                          <InputBox isError={false} type="Email" placeHolder="Country" onChangeText={(txt) => setEmail(txt)} />
                          <InputBox isError={false} type="Country" placeHolder="Date of Birth" onChangeText={(txt) => setEmail(txt)} />
                          
                      
                          <InputBox isError={false} type="Password" placeHolder="Password" onChangeText={(txt) => setEmail(txt)} />
                       </View>
                       
           
                  <View style={{ alignItems: "center", flex: 1 }}>
                                  <TouchableOpacity style={styles.subBtn} activeOpacity={0.7} onPress={()=>props.navigation.replace("Playlist")}>
                                      <Text style={styles.subTxt}>SEND</Text>
                                  
                  
                                  </TouchableOpacity>
                  
                              </View>
  
              
           
            

          


            


  

  
               


              
               {/*<View style={styles.logoLine1} />*/}



                    
        
     

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgWrapper: {
        flex: 1,
        backgroundColor: colorList.appBgColorr
    },
    appLogoView: {
        alignItems: "center",
        marginTop: 10,
       
    },
    appLogoImage: {
        height: 70,
        marginRight:-20,
        borderRadius: 500,
    
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 21,
    },
    textView: {
       
        marginLeft:30,
        width: "80%",
    },
    subBtn: {
            
        backgroundColor: "#84eab3", borderRadius: 19, padding: 10, marginTop: 30, width: "50%",flexDirection:"row",justifyContent:'center',alignItems:"center"
    },
    subTxt: {
        color: "#ffffff", textAlign: "center", fontSize: 18, fontWeight: "bold",marginRight:10
    },
    logoLine: {
        height: 2,
        backgroundColor: "white", // or any color you want
        marginTop: 10,
        width: "100%",
       
      },
      logoRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      },
      logoIcon: {
        marginLeft: 210,
      },
      
      iconWithText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
      },
      
      iconText: {
        color: 'white',
     
        marginRight: 280,
        height: 100,
        
      },


      iconRow: {
        flexDirection: 'row',
      
        alignItems: 'center',
        marginTop: 40,
        paddingHorizontal: 20,
      },
      
      iconWithText2: {
        alignItems: 'center',
        marginLeft: -30,
        marginTop: 220,

      },
      
      iconText: {
        color: '#fff',
        fontSize: 12,
      
      },
      logoIcon1: {
        marginLeft: 60,
        
     
      },
      iconText1: {
        color: 'black',
        fontSize: 12,
        marginLeft: 60,
       
      },
      logoLine1: {
        height: 1,
        backgroundColor: "#ffcccc", // or any color you want
        marginTop: 20,
        width: "100%",
       
      },



    
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        paddingHorizontal: 40,
      },
      
      roundButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      },
      
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#90ee90', // green
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // optional shadow on Android
      },
      
      
      
      
});