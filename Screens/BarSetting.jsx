import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { colorList } from "../Utils/ColorList";
import logo from "../Assets/Logo/Logo.png"
import InputBox from "../components/InputBox";
import Icon from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from 'react-native-vector-icons/Entypo';


export default function BarSetting(props) {
 
   // const [email, setEmail] = useState("")
    return (
        <SafeAreaView style={styles.bgWrapper}>

          
                
<View style={styles.appLogoView}>
<View style={styles.logoRow}>

           
<Image source={logo} style={styles.appLogoImage} resizeMode="contain"></Image>
<TouchableOpacity onPress={() => console.log("Menu opened!")}>
  <Icon name="close" size={34} color="#fff" style={styles.logoIcon} />
</TouchableOpacity>
</View>
  <View style={styles.logoLine} />
  
                  
  
              </View>
 

            <Text style={{ color: "#ffffff", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "600", }}>
          SETTINGS               <Text style={{ color: '#cc6ea1' }}>        </Text> 
            </Text>
                

           
<TouchableOpacity onPress={() => props.navigation.replace("Account")}>
 

            <Text style={{ color: "#ffffff", textAlign: "center", marginTop: 40, fontSize: 20, fontWeight: "600", }}>
                    <Icon name="key" size={20} color="#fff" style={styles.logoIcon} />  <Text style={{ color: '#cc6ea1' }}> Account                       </Text> 
            </Text>
            </TouchableOpacity>
            <View style={styles.logoLine1} />
  
                  
  
              
            <Text style={{ color: "#ffffff", textAlign: "center", marginTop: 40, fontSize: 20, fontWeight: "600", }}>
            <Icon name="lock" size={20} color="#fff" style={styles.logoIcon} />  <Text style={{ color: '#cc6ea1' }}> Privacy                       </Text> 
            </Text>
            <View style={styles.logoLine1} />
  
                  
  
              
            <Text style={{ color: "#ffffff", textAlign: "center", marginTop: 40, fontSize: 20, fontWeight: "600", }}>
                     <Icon name="questioncircleo" size={20} color="#fff"  style={styles.logoIcon1}  />  <Text style={{ color: '#cc6ea1' }}> Help                           </Text> 
            </Text>
            <View style={styles.logoLine1} />
  
            
  
              
            <Text style={{ color: "#ffffff", textAlign: "center", marginTop: 40, fontSize: 20, fontWeight: "600", }}>   
                            <Icon name="addusergroup" size={20} color="#fff"  style={styles.logoIcon1} />   <Text style={{ color: '#cc6ea1' }}>
                                       Invite a friend           </Text> 
            </Text>
            <View style={styles.logoLine1} />
  
                  
  
              
           
            

          


            


  

  
               


              
               {/*<View style={styles.logoLine1} />*/}



                    
        
     

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
      
      
      
      
});