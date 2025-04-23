import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { colorList } from "../Utils/ColorList";
import logo from "../Assets/Logo/Logo.png"
import InputBox from "../components/InputBox";
import Icon from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from 'react-native-vector-icons/Entypo';


export default function Danger(props) {
 
   // const [email, setEmail] = useState("")
    return (
        <SafeAreaView style={styles.bgWrapper}>

          
                
<View style={styles.appLogoView}>
<View style={styles.logoRow}>

           
<Image source={logo} style={styles.appLogoImage} resizeMode="contain"></Image>
<TouchableOpacity onPress={() => props.navigation.replace("BarSetting")}>
  <Icon name="bars" size={34} color="#fff" style={styles.logoIcon} />
</TouchableOpacity>
</View>
  
 
<View style={styles.logoLine} />

                

            </View>
            <Text style={{ color: "#ffffff", textAlign: "center", marginTop: 100, fontSize: 30, fontWeight: "600", }}>
                     ARE YOU  <Text style={{ color: '#cc6ea1' }}>             OK</Text> ?
            </Text>
           


          


            <View style={styles.buttonRow}>
  {/* No Button */}
  <TouchableOpacity style={[styles.roundButton, { backgroundColor: '#ff6b6b' }]} onPress={() => console.log("No tapped")}>
    <Text style={styles.buttonText}>No</Text>
  </TouchableOpacity>

  {/* Yes Button */}
  <TouchableOpacity style={[styles.roundButton, { backgroundColor: '#51cf66' }]} onPress={() => console.log("Yes tapped")}>
    <Text style={styles.buttonText}>Yes</Text>
  </TouchableOpacity>
</View>




           {/* <View style={{ alignItems: "center", flex: 1 }}>
                <TouchableOpacity style={styles.subBtn} activeOpacity={0.7} onPress={()=>props.navigation.replace("AllSetScreen")}>
                    <Text style={styles.subTxt}>Next</Text>
                  
                </TouchableOpacity>*/}


               


  

  
               


              
               {/*<View style={styles.logoLine1} />*/}


                <View style={styles.logoRow}>

<View style={styles.iconRow}>
  {/* Question Icon */}
  <TouchableOpacity onPress={() => console.log("Question tapped")}>
    <View style={styles.iconWithText2}>
      <Icon name="questioncircleo" size={30} color="#fff"  style={styles.logoIcon1}  />
      <Text style={styles.iconText1}>Question</Text>
    </View>
  </TouchableOpacity>

  {/* Gamepad Icon */}
  <TouchableOpacity onPress={() => console.log("Game tapped")}>
    <View style={styles.iconWithText2}>
      <Entypo name="game-controller" size={30} color="#fff" style={styles.logoIcon1}/>
      <Text style={styles.iconText1}>Game</Text>
    </View>
  </TouchableOpacity>

  {/* Support Icon */}
  <TouchableOpacity onPress={() => console.log("Support tapped")}>
    <View style={styles.iconWithText2}>
     
<Entypo name="direction" size={30} color="#fff" style={styles.logoIcon1}/>
      <Text style={styles.iconText1}>location</Text>
    </View>
  </TouchableOpacity>
</View>


                    </View> 
        
     

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgWrapper: {
        flex: 1,
        backgroundColor: colorList.appBgColor
    },
    appLogoView: {
        alignItems: "flex-start",
        marginTop: 10,
      
    },
    appLogoImage: {
        height: 50,
        marginRight:0
        
    
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 21,
    },
    textView: {
        padding: 0,
    },
    subBtn: {
        backgroundColor: "#e0afcc", borderRadius: 19, padding: 10, marginTop: 50, width: "70%",flexDirection:"row",justifyContent:'center',alignItems:"center"
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
        color: '#fff',
        fontSize: 12,
        marginLeft: 60,
       
      },
      logoLine1: {
        height: 2,
        backgroundColor: "white", // or any color you want
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
      
      
      
      
});